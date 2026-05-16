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
  const topIndexes = topImages.map((_, index) => groupStart + index);
  const thumbIndexes = safeImages
    .map((_, index) => index)
    .filter((index) => !topIndexes.includes(index));

  if (safeImages.length === 0) {
    return (
      <div className="rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-6 text-sm text-[#091f1a]/70">
        Nenhuma foto disponível no momento.
      </div>
    );
  }

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
      <div className="relative overflow-hidden rounded-2xl border border-[#091f1a]/10 bg-[#091f1a]">
        <button
          type="button"
          aria-label="Grupo anterior de fotos"
          onClick={goPrevGroup}
          className="absolute left-3 top-3 z-10 rounded-full border border-[#ffffff]/30 bg-[#091f1a]/75 p-1.5 text-[#ffffff] transition hover:bg-[#0f3028]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <button
          type="button"
          aria-label="Próximo grupo de fotos"
          onClick={goNextGroup}
          className="absolute right-3 top-3 z-10 rounded-full border border-[#ffffff]/30 bg-[#091f1a]/75 p-1.5 text-[#ffffff] transition hover:bg-[#0f3028]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-3">
          {topImages.map((src, index) => {
            const realIndex = groupStart + index;
            return (
              <div key={`${src}-${realIndex}`} className="relative h-[300px] border-[#ffffff]/10 md:h-[380px] md:border-l first:border-l-0">
                <img
                  src={src}
                  alt={`${altPrefix} - destaque ${realIndex + 1}`}
                  className="h-full w-full object-contain"
                />
              </div>
            );
          })}
        </div>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-[#091f1a]/70 px-3 py-1 text-xs text-[#ffffff]">
          Destaques {groupStart + 1}-{Math.min(groupStart + 3, safeImages.length)} de {safeImages.length}
        </div>
      </div>

      {thumbIndexes.length > 0 && (
        <div className="rounded-2xl border border-[#091f1a]/10 bg-[#ffffff] p-3">
          <p className="mb-3 text-sm font-semibold text-[#091f1a]/70">Demais fotos (miniaturas)</p>
          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {thumbIndexes.map((index) => (
              <button
                key={`${safeImages[index]}-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className="shrink-0 overflow-hidden rounded-lg border border-[#091f1a]/10 transition hover:border-[#f5af00]"
                aria-label={`Destacar foto ${index + 1}`}
              >
                <img
                  src={safeImages[index]}
                  alt={`${altPrefix} - miniatura ${index + 1}`}
                  className="h-20 w-28 object-cover sm:h-24 sm:w-36"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyPhotoSlider;
