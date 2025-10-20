import { ChatType } from "./ChatType";

export interface FrameType {
  projectId: string;
  frameId: string;
  designCode: string;
  createdOn: string;
  chatMessages: ChatType[];
}
