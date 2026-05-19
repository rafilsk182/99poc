// ───── Escola do Parceiro · shared components ─────────────────────
// Logo, icons, video card, chip, badges, bottom nav, thumbnails

// ── Icons (inline strokes, minimal & functional) ─────────────────
const Ic = {
  play:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.14v13.72c0 .79.87 1.27 1.54.83l10.84-6.86a1 1 0 0 0 0-1.66L9.54 4.31C8.87 3.87 8 4.35 8 5.14z"/></svg>,
  search:  (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  arrow:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>,
  back:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="m11 18-6-6 6-6"/></svg>,
  share:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4"/><path d="m15.4 6.5-6.8 4"/></svg>,
  copy:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>,
  whatsapp:(s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M19.1 4.9A10 10 0 0 0 4.4 18.2L3 22l3.9-1.4A10 10 0 1 0 19.1 4.9zm-7.1 15.4a8.3 8.3 0 0 1-4.3-1.2l-.3-.2-2.4.8.8-2.3-.2-.3a8.3 8.3 0 1 1 15.4-4.4 8.3 8.3 0 0 1-9 7.6zm4.7-6.2c-.3-.2-1.6-.8-1.8-.9s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.3-.4.7-1.2.1-.2.1-.4 0-.5l-.9-2.1c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4a3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.6 11.6 0 0 0 4.6 4.1 6.4 6.4 0 0 0 1.6.5c.7.1 1.3.1 1.8-.1.5-.2 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.2 0-.1-.2-.2-.4-.3z"/></svg>,
  link:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>,
  check:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>,
  close:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>,
  clock:   (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>,
  bolt:    (s=18) => <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z"/></svg>,
  // bottom nav
  home:    (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/></svg>,
  book:    (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h11a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z"/><path d="M4 17a3 3 0 0 1 3-3h11"/></svg>,
  portal:  (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 9h18"/><path d="M9 14h2"/></svg>,
  app:     (s=22) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg>,
  menu:    (s=20) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h10"/></svg>,
};

// ── Logo ─────────────────────────────────────────────────────────
function EPLogo({ size = 16, color = 'var(--ep-ink)', accent = 'var(--ep-primary)' }) {
  const g = size * 1.4;
  return (
    <div style={{ display:'inline-flex', alignItems:'center', gap: 8 }}>
      <div style={{
        width: g, height: g, borderRadius: g * 0.28,
        background: accent, display:'flex', alignItems:'center', justifyContent:'center',
        color:'var(--ep-ink)',
      }}>
        <svg width={g*0.5} height={g*0.5} viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5.14v13.72c0 .79.87 1.27 1.54.83l10.84-6.86a1 1 0 0 0 0-1.66L9.54 4.31C8.87 3.87 8 4.35 8 5.14z"/>
        </svg>
      </div>
      <div style={{ display:'flex', flexDirection:'column', lineHeight: 1, gap: 2 }}>
        <span style={{
          fontFamily:'var(--ep-font-display)',
          fontWeight: 800,
          fontSize: size,
          color,
          letterSpacing:'-0.02em',
        }}>Escola do Parceiro</span>
        <span style={{
          fontFamily:'var(--ep-font-body)',
          fontSize: size * 0.65, fontWeight: 500,
          color: 'var(--ep-muted)',
          letterSpacing:'0.06em', textTransform:'uppercase',
        }}>Aprenda em poucos minutos</span>
      </div>
    </div>
  );
}

// ── Badge (Novo, Popular, Recomendado, Comece aqui, Rápido) ───────
function Badge({ kind }) {
  const map = {
    new:   { bg: 'var(--ep-new-tint)',   fg: 'var(--ep-new)',   label: 'Novo' },
    pop:   { bg: 'var(--ep-pop-tint)',   fg: 'var(--ep-pop)',   label: 'Popular' },
    rec:   { bg: 'var(--ep-rec-tint)',   fg: 'var(--ep-rec)',   label: 'Recomendado' },
    start: { bg: 'var(--ep-primary-tint)', fg: 'var(--ep-primary-deep)', label: 'Comece aqui' },
    fast:  { bg: 'var(--ep-start-tint)', fg: 'var(--ep-start)', label: 'Rápido' },
  };
  const b = map[kind];
  if (!b) return null;
  const dot = kind === 'new' ? (
    <span style={{
      width: 5, height: 5, borderRadius: 999, background: b.fg, display:'inline-block',
    }}/>
  ) : null;
  return (
    <span className="ep-badge" style={{ background: b.bg, color: b.fg }}>
      {dot}{b.label}
    </span>
  );
}

// ── Thumbnail (SVG placeholder, color-coded per track) ───────────
function Thumb({ palette = ['#FFE5D0','#FFB088','#E0794F'], label, duration, badge, height, radius = 14, large = false }) {
  const [c1, c2, c3] = palette;
  const h = height || (large ? 200 : 130);
  return (
    <div style={{
      position:'relative', width:'100%', height: h,
      borderRadius: radius, overflow:'hidden',
      background: `linear-gradient(135deg, ${c1} 0%, ${c2} 60%, ${c3} 100%)`,
      flexShrink: 0,
    }}>
      {/* subtle stripes for texture */}
      <svg width="100%" height="100%" style={{ position:'absolute', inset:0, opacity: 0.18, mixBlendMode:'overlay' }}>
        <defs>
          <pattern id={`stripes-${c3.replace('#','')}`} x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.6"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#stripes-${c3.replace('#','')})`}/>
      </svg>
      {/* deep tint at bottom for legibility */}
      <div style={{
        position:'absolute', inset:0,
        background: `linear-gradient(180deg, transparent 40%, rgba(20,15,10,0.45) 100%)`,
      }}/>
      {/* play glyph */}
      <div style={{
        position:'absolute', left:'50%', top:'50%',
        transform:'translate(-50%,-50%)',
        width: large ? 56 : 42, height: large ? 56 : 42, borderRadius: 999,
        background:'rgba(255,255,255,0.95)', color:'var(--ep-ink)',
        display:'flex', alignItems:'center', justifyContent:'center',
        boxShadow:'0 4px 18px rgba(0,0,0,.18)',
      }}>{Ic.play(large ? 22 : 18)}</div>
      {/* duration pill */}
      {duration && (
        <div style={{
          position:'absolute', right: 10, bottom: 10,
          background:'rgba(20,15,10,0.72)', color:'#fff',
          padding:'4px 8px', borderRadius: 6,
          fontSize: 11, fontWeight: 600,
          display:'inline-flex', alignItems:'center', gap: 4,
          backdropFilter:'blur(6px)',
        }}>
          {Ic.clock(11)} {duration}
        </div>
      )}
      {/* badge on thumb (top-left) */}
      {badge && (
        <div style={{ position:'absolute', left: 10, bottom: 10 }}>
          <Badge kind={badge}/>
        </div>
      )}
    </div>
  );
}

// ── Video card (thumb on top, meta below) ────────────────────────
function VideoCard({ video, width, thumbH, onOpen, compact = false }) {
  if (!video) return null;
  return (
    <button
      className="ep-card"
      onClick={() => onOpen && onOpen(video)}
      style={{
        width: width || '100%',
        textAlign:'left',
        background:'transparent', padding: 0,
        display:'flex', flexDirection:'column', gap: 10,
        flexShrink: 0,
      }}>
      <Thumb
        palette={video.palette}
        label={video.title}
        duration={video.duration}
        badge={video.badge}
        height={thumbH}
      />
      <div style={{ padding:'0 2px', display:'flex', flexDirection:'column', gap: 4 }}>
        <div style={{
          fontSize: compact ? 13.5 : 14.5, fontWeight: 600,
          lineHeight: 1.3,
          color:'var(--ep-ink)',
          display:'-webkit-box',
          WebkitBoxOrient:'vertical',
          WebkitLineClamp: 2,
          overflow:'hidden',
          textWrap:'pretty',
        }}>{video.title}</div>
        <div style={{
          fontSize: 12, color:'var(--ep-muted)',
          display:'flex', alignItems:'center', gap: 6,
        }}>
          <span>{video.trackTitle}</span>
        </div>
      </div>
    </button>
  );
}

// ── Numbered card (used in "Mais assistidos") ────────────────────
function NumberedCard({ video, n, onOpen, width }) {
  return (
    <button
      className="ep-card"
      onClick={() => onOpen && onOpen(video)}
      style={{
        width: width || '100%', flexShrink: 0,
        textAlign:'left', background:'transparent', padding: 0,
        display:'flex', flexDirection:'column', gap: 10,
        position:'relative',
      }}>
      <div style={{ position:'relative' }}>
        <Thumb palette={video.palette} label={video.title} duration={video.duration} height={130} />
        <div style={{
          position:'absolute', left: -8, top: -8,
          width: 38, height: 38, borderRadius: 12,
          background:'var(--ep-ink)', color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
          fontFamily:'var(--ep-font-display)',
          fontWeight: 800, fontSize: 18,
          boxShadow:'0 4px 14px rgba(0,0,0,.18)',
          border:'3px solid var(--ep-bg)',
        }}>{n}</div>
      </div>
      <div style={{ padding:'0 2px' }}>
        <div style={{
          fontSize: 14, fontWeight: 600,
          lineHeight: 1.3, color:'var(--ep-ink)',
          display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: 2, overflow:'hidden',
        }}>{video.title}</div>
        <div style={{ fontSize: 12, color:'var(--ep-muted)', marginTop: 4 }}>
          {video.trackTitle}
        </div>
      </div>
    </button>
  );
}

// ── Horizontal rail (track header + scrolling cards) ─────────────
function Rail({ title, desc, children, onSeeAll, padding = 16 }) {
  return (
    <section style={{ display:'flex', flexDirection:'column', gap: 12 }}>
      <header style={{
        display:'flex', alignItems:'flex-end', justifyContent:'space-between',
        gap: 12, padding: `0 ${padding}px`,
      }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 2, minWidth: 0 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700 }}>{title}</h3>
          {desc && (
            <p style={{
              fontSize: 13, color:'var(--ep-muted)',
              display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: 1, overflow:'hidden',
              textWrap:'pretty',
            }}>{desc}</p>
          )}
        </div>
        {onSeeAll && (
          <button className="ep-btn-ghost" onClick={onSeeAll}>
            Ver todos {Ic.arrow(14)}
          </button>
        )}
      </header>
      <div
        className="ep-rail"
        style={{
          display:'flex', gap: 12,
          overflowX:'auto', overflowY:'hidden',
          padding: `4px ${padding}px 6px`,
          scrollSnapType:'x mandatory',
        }}>
        {React.Children.map(children, child => (
          <div style={{ scrollSnapAlign:'start' }}>{child}</div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Ic, EPLogo, Badge, Thumb, VideoCard, NumberedCard, Rail });
