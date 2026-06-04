import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Thermometer, ShieldAlert, Zap, RefreshCw, BarChart, Sliders, Layers } from 'lucide-react';

export default function AgritechDemo() {
  const [scenario, setScenario] = useState<'ssp1' | 'ssp2' | 'ssp5'>('ssp2');
  const [year, setYear] = useState<number>(2040);
  const [telemetry, setTelemetry] = useState<'ndvi' | 'humidex' | 'temp'>('humidex');
  const [isScanning, setIsScanning] = useState(false);
  const [heatmapCells, setHeatmapCells] = useState<number[]>([]);

  // Calculate simulated parameters
  const getDiscomfortLevel = () => {
    let base = 15; // base humidex discomfort days
    if (scenario === 'ssp1') base += (year - 2026) * 0.4;
    else if (scenario === 'ssp2') base += (year - 2026) * 0.8;
    else base += (year - 2026) * 1.5;
    return Math.round(Math.min(base, 120));
  };

  const getYieldImpact = () => {
    let loss = 2; // base % yield loss
    if (scenario === 'ssp1') loss += (year - 2026) * 0.15;
    else if (scenario === 'ssp2') loss += (year - 2026) * 0.35;
    else loss += (year - 2026) * 0.7;
    return parseFloat(Math.min(loss, 65).toFixed(1));
  };

  const getHeatAnomaly = () => {
    let delta = 0.5;
    if (scenario === 'ssp1') delta += (year - 2026) * 0.02;
    else if (scenario === 'ssp2') delta += (year - 2026) * 0.045;
    else delta += (year - 2026) * 0.09;
    return parseFloat(delta.toFixed(2));
  };

  // Generate grid cell values dynamically
  const generateGrid = () => {
    setIsScanning(true);
    setTimeout(() => {
      const cells = [];
      const humidexVal = getDiscomfortLevel();
      const yieldLoss = getYieldImpact();

      for (let i = 0; i < 36; i++) {
        // base variance
        let noise = Math.sin(i * 0.5) * 10 + Math.cos(i * 0.3) * 12;
        let finalVal = 50;

        if (telemetry === 'ndvi') {
          // NDVI decreases as year is late and scenario is worse
          finalVal = Math.max(20, Math.min(90, Math.round(75 - yieldLoss * 0.8 + noise * 0.4)));
        } else if (telemetry === 'humidex') {
          // Humidex discomfort score
          finalVal = Math.max(10, Math.min(100, Math.round(humidexVal + noise * 0.6)));
        } else {
          // Parametric temperature grid
          finalVal = Math.max(25, Math.min(50, Math.round(32 + getHeatAnomaly() + noise * 0.1)));
        }
        cells.push(finalVal);
      }
      setHeatmapCells(cells);
      setIsScanning(false);
    }, 600);
  };

  useEffect(() => {
    generateGrid();
  }, [scenario, year, telemetry]);

  const getCellBg = (val: number) => {
    if (telemetry === 'ndvi') {
      // green represents high NDVI
      if (val > 65) return 'bg-emerald-600/80';
      if (val > 45) return 'bg-emerald-500/40';
      if (val > 30) return 'bg-yellow-500/30';
      return 'bg-red-500/40 animate-pulse';
    } else if (telemetry === 'humidex') {
      // red/orange represents human heat discomfort safety thresholds
      if (val > 80) return 'bg-red-650/85 text-red-100 animate-pulse border border-red-500/50';
      if (val > 55) return 'bg-orange-500/60';
      if (val > 35) return 'bg-amber-400/30';
      return 'bg-emerald-500/25';
    } else {
      // temperature degrees heat maps
      if (val > 40) return 'bg-red-700/80 border border-red-500/30';
      if (val > 35) return 'bg-red-500/40';
      if (val > 31) return 'bg-orange-400/30';
      return 'bg-sky-500/25';
    }
  };

  return (
    <section id="simulator" className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
              Interactive Microclimatic Sandbox
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              CHC-CMIP6 Agricultural Projection Simulator
            </h2>
            <p className="text-slate-300 leading-relaxed font-sans text-sm sm:text-base">
              Dr. Anil Kumar Singh developed spatial methodologies assessing workforce climate hazards and parametric crop thresholds utilizing IPCC Phase 6 parameters. 
              <strong> Adjust the controls below</strong> to simulate how different greenhouse gas path scenarios (SSPs) modify regional crop indices, human discomfort Humidex scores, and estimated yield losses over long timelines.
            </p>

            {/* Simulated Outputs panel widgets */}
            <div className="grid grid-cols-3 gap-4 pt-3.5">
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <span className="text-xs text-slate-500 font-mono block">Estimated loss</span>
                <span className="text-xl font-bold text-red-400 font-mono mt-0.5 block">{getYieldImpact()}%</span>
                <span className="text-[10px] text-slate-400 font-sans block mt-1">Average Yield</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <span className="text-xs text-slate-500 font-mono block">Heat Anomaly</span>
                <span className="text-xl font-bold text-orange-400 font-mono mt-0.5 block">+{getHeatAnomaly()}°C</span>
                <span className="text-[10px] text-slate-400 font-sans block mt-1">Global Base delta</span>
              </div>
              <div className="bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 text-center">
                <span className="text-xs text-slate-500 font-mono block">Discomfort Days</span>
                <span className="text-xl font-bold text-amber-500 font-mono mt-0.5 block">{getDiscomfortLevel()} days</span>
                <span className="text-[10px] text-slate-400 font-sans block mt-1">Working Humidex</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-slate-900 border border-slate-800/80 rounded-2xl p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-slate-350 font-bold uppercase">Grid Calibration (4 KM Res)</span>
              </div>
              <button 
                onClick={generateGrid}
                className="flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase font-mono text-emerald-400 bg-emerald-500/5 hover:bg-emerald-500/10 rounded-lg transition-colors border border-emerald-500/10"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Re-calibrate</span>
              </button>
            </div>

            {/* Simulator Interactive map area */}
            <div className="relative aspect-video rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center p-4">
              {isScanning && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/60 backdrop-blur-[1px]">
                  <div className="flex flex-col items-center gap-2">
                    <Compass className="w-8 h-8 text-emerald-400 animate-spin" />
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Re-rendering GIS Matrix...</span>
                  </div>
                </div>
              )}

              {/* Grid drawing */}
              <div className="grid grid-cols-6 gap-1 w-full max-w-sm aspect-square relative">
                {heatmapCells.map((val, idx) => (
                  <div 
                    key={idx}
                    className={`rounded-md transition-all duration-500 ease-out flex items-center justify-center text-[8px] font-mono font-black border border-slate-950/40 cursor-help ${getCellBg(val)}`}
                    title={`Cell ${idx+1}: Score ${val}`}
                  >
                    {telemetry === 'temp' ? `${val}°` : val}
                  </div>
                ))}
              </div>
            </div>

            {/* Legend guide info */}
            <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-slate-400 border-t border-slate-800/60 pt-3">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-emerald-500/60 rounded"></span>
                <span>Optimal (Stable)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-amber-400/40 rounded"></span>
                <span>Mild Stress</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-red-650/80 rounded"></span>
                <span>Severe (Discomfort)</span>
              </div>
            </div>
          </div>
        </div>

        {/* CONTROLS ZONE */}
        <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Scenario Selector */}
          <div className="space-y-3.5">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2 font-black">
              <Sliders className="w-4 h-4 text-emerald-500" />
              <span>IPCC Pathway Scenario</span>
            </label>
            <div className="flex flex-col gap-2">
              {[
                { id: 'ssp1', title: 'SSP1-2.6', desc: 'Sustainable, low emissions path' },
                { id: 'ssp2', title: 'SSP2-4.5', desc: 'Moderate, status quo emission path' },
                { id: 'ssp5', title: 'SSP5-8.5', desc: 'Fossil-fuel intensive, extreme path' },
              ].map((sc) => (
                <button
                  key={sc.id}
                  onClick={() => setScenario(sc.id as any)}
                  className={`text-left p-3 rounded-xl border transition-all duration-300 ${scenario === sc.id ? 'bg-emerald-500/15 border-emerald-500/40 ring-1 ring-emerald-500' : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-950/80'}`}
                >
                  <span className="text-xs uppercase font-mono font-black text-slate-100 block">{sc.title}</span>
                  <span className="text-[10px] text-slate-400 font-sans mt-0.5 block">{sc.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Year Range Slider */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2 font-black">
                <Thermometer className="w-4 h-4 text-emerald-500" />
                <span>Future Projection Year</span>
              </label>
              <span className="text-lg font-bold font-mono text-emerald-400">{year} AD</span>
            </div>
            
            <div className="flex flex-col space-y-4 justify-center h-2/3">
              <input
                type="range"
                min="2026"
                max="2080"
                step="2"
                value={year}
                id="climate-year-range-slider"
                onChange={(e) => setYear(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>2026 (Base)</span>
                <span>2050 (Mid)</span>
                <span>2080 (Long Range)</span>
              </div>
            </div>
          </div>

          {/* Telemetry Layer Selection */}
          <div className="space-y-3.5">
            <label className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2 font-black">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>Telemetry Map Layer</span>
            </label>
            <div className="flex flex-col gap-2">
              {[
                { id: 'humidex', title: 'Workforce Humidex Index', desc: 'Climate-induced extreme heat discomfort score' },
                { id: 'ndvi', title: 'Calculated NDVI Index', desc: 'Simulated multi-spectral crop canopy leaf-area index' },
                { id: 'temp', title: 'Parametric Temp Grids', desc: 'Extreme grid-cell absolute threshold models' },
              ].map((tl) => (
                <button
                  key={tl.id}
                  onClick={() => setTelemetry(tl.id as any)}
                  className={`text-left p-3 rounded-xl border transition-all duration-300 ${telemetry === tl.id ? 'bg-sky-500/10 border-sky-500/40 ring-1 ring-sky-500' : 'bg-slate-950/40 border-slate-800/80 hover:bg-slate-950/80'}`}
                >
                  <span className="text-xs uppercase font-mono font-black text-slate-100 block">{tl.title}</span>
                  <span className="text-[10px] text-slate-400 font-sans mt-0.5 block">{tl.desc}</span>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
