import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type MobileWhatsAppBarProps = {
  href: string;
  label: string;
};

const MobileWhatsAppBar = ({ href, label }: MobileWhatsAppBarProps) => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[#091f1a]/10 bg-[#ffffff]/95 p-3 backdrop-blur md:hidden">
      <a href={href} target="_blank" rel="noreferrer" className="block">
        <Button className="w-full bg-[#25d366] text-[#0f2b22] hover:bg-[#1ebe58]">
          {label}
          <MessageCircle className="ml-2 h-4 w-4" />
        </Button>
      </a>
    </div>
  );
};

export default MobileWhatsAppBar;
