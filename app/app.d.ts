import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { type } from "os";
import { TypedObject } from "sanity";

export interface DataType {
  _id: string;
  _type: "project" | "word" | "exhibition" | "info";
  text: TypedObject | TypedObject[];
  slug: {
    current: string;
  };
}

export interface ProjectType extends DataType {
  _type: "project";
  image: SanityImageSource;
  title: string;
  year: string;
}

export interface WordType extends DataType {
  _type: "word" | "exhibition";
  title: string;
}

export interface InfoType extends DataType {
    _type: "info";
    image: string;
    }

export type BlockType = ProjectType | WordType;
