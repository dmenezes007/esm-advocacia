import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PropertyPhotoSliderProps = {
  images: string[];
  altPrefix: string;
};

const PropertyPhotoSlider = ({ images, altPrefix }: PropertyPhotoSliderProps) => {
  const safeImages = useMemo(() => images.filter(Boolean), [images]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupStart = Math.floor(currentIndex / 3) * 3;
  const topImages = safeImages.slice(groupStart, groupStart + 3);

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

  const goPrevGroup = () => {
    setCurrentIndex((prev) => {
      const currentGroup = Math.floor(prev / 3);
      const nextGroup = currentGroup === 0 ? Math.floor((safeImages.length - 1) / 3) : currentGroup - 1;
      return nextGroup * 3;
    });
  };

  const goNextGroup = () => {
    setCurrentIndex((prev) => {
      const lastGroup = Math.floor((safeImages.length - 1) / 3);
      const currentGroup = Math.floor(prev / 3);
      const nextGroup = currentGroup === lastGroup ? 0 : currentGroup + 1;
      return nextGroup * 3;
    });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-3">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#091f1a]/70">Fotos em destaque (3 por vez)</p>
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Grupo anterior de fotos"
              onClick={goPrevGroup}
              className="rounded-full border border-[#091f1a]/15 bg-[#ffffff] p-1.5 text-[#091f1a] transition hover:bg-[#f5af00]/20"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo grupo de fotos"
              onClick={goNextGroup}
              className="rounded-full border border-[#091f1a]/15 bg-[#ffffff] p-1.5 text-[#091f1a] transition hover:bg-[#f5af00]/20"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {topImages.map((src, index) => {
            const realIndex = groupStart + index;
            return (
              <button
                key={`${src}-${realIndex}`}
                type="button"
                onClick={() => setCurrentIndex(realIndex)}
                className={`overflow-hidden rounded-xl border-2 transition ${
                  realIndex === currentIndex ? "border-[#f5af00]" : "border-transparent"
                }`}
                aria-label={`Ir para foto ${realIndex + 1}`}
              >
                <img
                  src={src}
                  alt={`${altPrefix} - miniatura ${realIndex + 1}`}
                  className="h-24 w-full object-cover sm:h-28"
                />
              </button>
            );
          })}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-2xl bg-[#0f3028]">
        <img
          src={safeImages[currentIndex]}
          alt={`${altPrefix} - foto ${currentIndex + 1}`}
          className="h-[260px] w-full object-contain sm:h-[380px] md:h-[540px]"
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
    </div>
  );
};

export default PropertyPhotoSlider;
