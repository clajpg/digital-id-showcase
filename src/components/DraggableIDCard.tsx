import { useState, useRef, useEffect } from "react";
import { User, MapPin, Briefcase, Calendar, Fingerprint } from "lucide-react";

interface Position {
  x: number;
  y: number;
}

const DraggableIDCard = () => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - position.x,
      y: touch.clientY - position.y,
    });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      });
    };

    const handleEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleEnd);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleEnd);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      ref={cardRef}
      className={`id-card w-80 md:w-96 select-none transition-transform ${
        isDragging ? "scale-105 z-50" : "floating"
      }`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) ${isDragging ? 'scale(1.05)' : ''}`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Holographic Overlay */}
      <div className="absolute inset-0 holographic-effect rounded-xl opacity-50 pointer-events-none" />
      
      {/* Scan Line Effect */}
      <div className="scan-line rounded-xl" />

      {/* Card Content */}
      <div className="relative p-6 z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-display text-primary tracking-widest">DIGITAL ID</span>
          </div>
          <div className="text-xs text-muted-foreground font-mono">
            #2024-0001
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex gap-4 mb-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center overflow-hidden">
              <User className="w-10 h-10 text-primary" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-green-300 animate-pulse" />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="font-display text-lg font-bold neon-text mb-1">
              ALEX CYBER
            </h3>
            <p className="text-sm text-muted-foreground mb-2">
              Full Stack Developer
            </p>
            <div className="flex items-center gap-1 text-xs text-primary/70">
              <MapPin className="w-3 h-3" />
              <span>Jakarta, Indonesia</span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="glass-card p-3 text-center">
            <div className="text-lg font-display font-bold text-primary">5+</div>
            <div className="text-xs text-muted-foreground">Years Exp</div>
          </div>
          <div className="glass-card p-3 text-center">
            <div className="text-lg font-display font-bold text-primary">50+</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
          <div className="glass-card p-3 text-center">
            <div className="text-lg font-display font-bold text-primary">100%</div>
            <div className="text-xs text-muted-foreground">Passion</div>
          </div>
        </div>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {["React", "TypeScript", "Node.js", "Tailwind"].map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-primary/20">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            <span>Valid: 2024-2099</span>
          </div>
          <div className="flex items-center gap-2">
            <Fingerprint className="w-5 h-5 text-primary animate-pulse" />
          </div>
        </div>

        {/* Barcode */}
        <div className="mt-4 h-8 flex items-end gap-0.5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="flex-1 bg-primary/40"
              style={{ height: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      </div>

      {/* Drag Hint */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-muted-foreground animate-pulse">
        ↔ Drag me around
      </div>
    </div>
  );
};

export default DraggableIDCard;
