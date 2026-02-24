/**
 * MDX components used only by this project's article.
 * Loaded only when the theme-os project page is viewed (code-split).
 */
import { ImageCycle } from "../../components/ImageCycle.tsx";
import { ArchitectureDiagram } from "./components/ArchitectureDiagram.tsx";

export { ArchitectureDiagram, ImageCycle };
export default {
  ArchitectureDiagram,
  ImageCycle,
};
