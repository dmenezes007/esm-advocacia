import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropertyPhotoSliderProps = {
  images: string[];
  altPrefix: string;
};

const PropertyPhotoSlider = ({ images, altPrefix }: PropertyPhotoSliderProps) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (safeImages.length === 0) {
    return (
      <div className="rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-6 text-sm text-[#091f1a]/70">
        Nenhuma foto disponível no momento.
      </div>
    );
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? safeImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === safeImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl bg-[#0f3028]">
        <img
          src={safeImages[currentIndex]}
          alt={`${altPrefix} - foto ${currentIndex + 1}`}
          className="h-[260px] w-full object-cover sm:h-[380px] md:h-[540px]"
        />

        <button
          type="button"
          aria-label="Foto anterior"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-[#ffffff]/30 bg-[#091f1a]/65 p-2 text-[#ffffff] transition hover:bg-[#091f1a]"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          aria-label="Próxima foto"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-[#ffffff]/30 bg-[#091f1a]/65 p-2 text-[#ffffff] transition hover:bg-[#091f1a]"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#091f1a]/70 px-3 py-1 text-xs text-[#ffffff]">
          <span>
            {currentIndex + 1}/{safeImages.length}
          </span>
        </div>
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-1">
        {safeImages.map((src, index) => (
          <button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`shrink-0 overflow-hidden rounded-xl border-2 transition ${
              index === currentIndex ? "border-[#f5af00]" : "border-transparent"
            }`}
            aria-label={`Ir para foto ${index + 1}`}
          >
            <img
              src={src}
              alt={`${altPrefix} - miniatura ${index + 1}`}
              className="h-20 w-28 object-cover sm:h-24 sm:w-36"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default PropertyPhotoSlider;
