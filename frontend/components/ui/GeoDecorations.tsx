export function GeoDecorations() {
  return (
    <>
      {/* Coordinate markers in corners */}
      <div className="absolute top-8 left-8 text-xs font-mono text-primary/20 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-primary/20 rounded-full" />
          <span>0°N, 0°E</span>
        </div>
      </div>

      <div className="absolute top-8 right-8 text-xs font-mono text-primary/20 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <span>45°N, 90°E</span>
          <div className="w-4 h-4 border-2 border-primary/20 rounded-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-8 text-xs font-mono text-primary/20 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 border-2 border-primary/20 rounded-full" />
          <span>-30°S, 15°W</span>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-xs font-mono text-primary/20 select-none pointer-events-none">
        <div className="flex items-center gap-2">
          <span>-15°S, 60°E</span>
          <div className="w-4 h-4 border-2 border-primary/20 rounded-full" />
        </div>
      </div>

      {/* Crosshair markers */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 pointer-events-none select-none">
        <div className="absolute inset-0 border-t-2 border-l-2 border-accent/10 rounded-tl-lg" />
        <div className="absolute top-0 left-0 w-1 h-1 bg-accent/20 rounded-full" />
      </div>

      <div className="absolute top-1/3 right-1/3 w-8 h-8 pointer-events-none select-none">
        <div className="absolute inset-0 border-t-2 border-r-2 border-blue/10 rounded-tr-lg" />
        <div className="absolute top-0 right-0 w-1 h-1 bg-blue/20 rounded-full" />
      </div>

      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 pointer-events-none select-none">
        <div className="absolute inset-0 border-b-2 border-r-2 border-accent/10 rounded-br-lg" />
        <div className="absolute bottom-0 right-0 w-1 h-1 bg-accent/20 rounded-full" />
      </div>
    </>
  );
}
