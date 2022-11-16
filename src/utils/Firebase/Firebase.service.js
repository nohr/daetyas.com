/* eslint-disable no-loop-func */
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  Timestamp,
} from "firebase/firestore/lite";
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
import { state } from "../state";
import { db, storage } from "./api";
// import { convertToWebp } from '../common';

export async function handleAddContent(
  selectedFiles,
  name,
  setLoad,
  content,
  setContent,
  setIsFilePicked,
  fileInput,
  TikTokID,
  setTikTokID
) {
  let uploadTask = null;
  let newContent = [];
  // handle uploading multiple files with an ordered id
  for (let file of selectedFiles) {
    // check file size
    if (file.size > 5242880) {
      alert("File size is too large. Please upload a file less than 5MB.");
      return;
    }
    // keep track of file upload progress
    let progress = 0;
    // create a unique id for the file
    const id = v4();
    // create a reference to the storage bucket location
    const storageRef = ref(
      storage,
      `projects/${name} Media/${id}-${file.name}`
    );
    // upload the file
    uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // calculate the upload progress
        progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setLoad(`${progress}%`);
      },
      (error) => {
        // catch errors
        console.log(error);
      },
      () => {
        // // get the download url of the resized img when complete
        // if (file.type.includes("image")) {
        //     getDownloadURL(ref(storage, `projects/${name} Media/${id}-${convertToWebp(file.name)}`)).then(downloadURL => {
        //         handleGetContent(name, setContent, newContent, content, id, convertToWebp(file.name), "image", downloadURL, setLoad, progress);
        //     });
        // } else {
        //     getDownloadURL(ref(storage, `projects/${name} Media/${id}-${file.name}`)).then(downloadURL => {
        //         handleGetContent(name, setContent, newContent, content, id, file.name, file.type, downloadURL, setLoad, progress);
        //     });
        // }
        getDownloadURL(
          ref(storage, `projects/${name} Media/${id}-${file.name}`)
        ).then((downloadURL) => {
          handleGetContent(
            name,
            setContent,
            newContent,
            content,
            id,
            file.name,
            file.type,
            downloadURL,
            setLoad,
            progress
          );
        });
        setLoad("5MB Max");
        progress = 0;
      }
    );
  }

  // handle adding TikTok embed
  if (TikTokID !== "") {
    newContent.push({ id: v4(), url: TikTokID, type: "tiktok" });
    // append the new content to the state
    setContent([...content, ...newContent]);
    // update the firestore document
    setDoc(
      doc(db, "projects", name),
      { content: [...content, ...newContent] },
      { merge: true }
    );
    setTikTokID("");
  }

  // handle adding Instagram embed
  // if (InstaID !== '') {
  //     newContent.push({ id: v4(), url: InstaID, type: 'instagram' });
  //     // append the new content to the state
  //     setContent([...content, ...newContent]);
  //     setInstaID('');
  // }

  setIsFilePicked(false);
  fileInput.current.value = "";
  newContent = [];
}

// wait for the firebase extension to finish and grab the download url
function handleGetContent(
  name,
  setContent,
  newContent,
  content,
  id,
  filename,
  filetype,
  downloadURL
) {
  // add the file to the array of files with an ordered id
  newContent.push({
    id,
    name: `${id}-${filename}`,
    url: downloadURL,
    type: filetype.split("/")[0],
  });
  // add the new content to the content array
  setContent([...content, ...newContent]);
  // update the firestore document
  setDoc(
    doc(db, "projects", name),
    { content: [...content, ...newContent] },
    { merge: true }
  );
}

export function handleDeleteContent(item, name, content, setContent) {
  // // remove the file from storage if its a image or video
  // if (item.type === 'image') {
  //     deleteObject(ref(storage, `projects/${name} Media/${convertToWebp(item.name)}`));
  // } else if (item.type === 'video') {
  //     deleteObject(ref(storage, `projects/${name} Media/${item.name}`));
  // }
  deleteObject(ref(storage, `projects/${name} Media/${item.name}`));
  // remove the item from the content array
  setContent(content.filter((i) => i !== item));
  // update the firestore doc
  setDoc(
    doc(db, "projects", name),
    {
      content: content.filter((i) => i !== item),
    },
    { merge: true }
  );
}

export async function handleDeletePost(name, setSaved) {
  setSaved(true);
  await deleteDoc(doc(db, "projects", name));
  // delete firebase storage folder
  listAll(ref(storage, `projects/${name} Media`)).then((res) => {
    res.items.forEach((itemRef) => {
      deleteObject(itemRef);
    });
  });
}

export async function uploadData(
  name,
  category,
  description,
  date,
  url,
  content,
  cover
) {
  // generate a pathname for the project
  let path = name.toLowerCase().replace(/ /g, "-");
  let timestamp = Timestamp.fromMillis(
    new Date(
      date.split("-")[0],
      date.split("-")[1] - 1,
      date.split("-")[2]
    ).getTime()
  );
  // Add or Edit Firestore doc
  await setDoc(
    doc(db, "projects", name),
    {
      path: path,
      name: name,
      date: timestamp,
      category: category,
      description: description,
      url: url,
      cover: cover,
      content: content,
    },
    { merge: true }
  );
}

export async function handleGetAbout() {
  const docRef = doc(db, "info", "About");
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    state.about = docSnap.data().text;
    state.email = docSnap.data().email;
    state.photo = docSnap.data().photo;
  } else {
    console.log("No such document!");
  }
}

export async function uploadAbout() {
  await setDoc(
    doc(db, "info", "About"),
    {
      text: state.about,
      email: state.email,
    },
    { merge: true }
  );
}

export async function handleGetData() {
  const data = await getDocs(
    query(
      collection(db, "projects"),
      // where("published", "==", true),
      orderBy("date", "desc")
    )
  );
  state.data = data.docs.map((doc) => doc.data());
}

export async function handleGetCategories() {
  const data = await getDocs(
    query(
      collection(db, "projects"),
      // where("published", "==", true),
      orderBy("date", "desc")
    )
  );
  state.categories = [...new Set(data.docs.map((doc) => doc.data().category))];
  state.categories.sort();
}

export async function handleGetProjectData(name, setContent) {
  getDoc(doc(db, "projects", name))
    .then((doc) => {
      if (doc.exists()) {
        setContent(doc.data().content);
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
    });
}

// Get info and content  from database
// export async function GetContent() {
//   const musicCol = collection(db, "music");
//   const photosCol = collection(db, "photos");
//   const wordsCol = collection(db, "words");
//   const infoCol = collection(db, "info");
//   const musicSnapshot = await getDocs(musicCol);
//   const photosSnapshot = await getDocs(photosCol);
//   const wordsSnapshot = await getDocs(wordsCol);
//   const infoSnapshot = await getDocs(infoCol);
//   state.music = musicSnapshot.docs.map((doc) => doc.data());
//   state.photos = photosSnapshot.docs.map((doc) => doc.data());
//   state.words = wordsSnapshot.docs.map((doc) => doc.data());
//   state.info = infoSnapshot.docs.map((doc) => doc.data());
// }
