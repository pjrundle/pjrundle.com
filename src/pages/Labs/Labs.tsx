import { PJRGlyphAnimated } from "./components/PJRGlyphAnimated.tsx";
import { Starfield } from "./components/Starfield.tsx";

export const Labs = () => {
  return (
    <section>
      <div className="page-gutter">
        <div className="page-container-lg">
          <div className="rel">
            <div className="h:700px rel">
              <Starfield />
            </div>
            <PJRGlyphAnimated
              className="color:color-gray-900 abs-center"
              strokeWidth={1}
              fillColor="color-gray-900"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
