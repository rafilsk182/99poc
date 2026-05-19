// ───── Escola do Parceiro · DESKTOP video detail (1280px) ─────────

function DVideoPlayer({ video, playing, onTogglePlay }) {
  return (
    <div style={{
      position:'relative', width:'100%',
      aspectRatio:'16/9',
      background:`linear-gradient(135deg, ${video.palette[0]} 0%, ${video.palette[1]} 50%, ${video.palette[2]} 100%)`,
      overflow:'hidden',
      borderRadius:'var(--ep-r-lg)',
    }}>
      <svg width="100%" height="100%" style={{ position:'absolute', inset:0, opacity:0.16, mixBlendMode:'overlay' }}>
        <defs>
          <pattern id="dplayer-stripes" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#fff" strokeWidth="1.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dplayer-stripes)"/>
      </svg>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)' }}/>
      <button
        onClick={onTogglePlay}
        style={{
          position:'absolute', left:'50%', top:'50%',
          transform:'translate(-50%,-50%)',
          width: 96, height: 96, borderRadius: 999,
          background:'rgba(255,255,255,0.96)', color:'var(--ep-ink)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 10px 40px rgba(0,0,0,.32)',
        }}>
        {playing ? (
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
        ) : Ic.play(38)}
      </button>
      {playing && (
        <div style={{
          position:'absolute', left: 20, top: 20,
          display:'inline-flex', alignItems:'center', gap: 6,
          background:'rgba(0,0,0,0.55)', color:'#fff',
          padding:'6px 12px', borderRadius: 999,
          fontSize: 12, fontWeight: 600,
        }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background:'#ff5050' }}/>
          Em reprodução
        </div>
      )}
      <div style={{
        position:'absolute', left: 24, right: 24, bottom: 22,
        display:'flex', alignItems:'center', gap: 14,
      }}>
        <div style={{ flex: 1, height: 5, borderRadius: 999, background:'rgba(255,255,255,0.3)', overflow:'hidden' }}>
          <div style={{ width: '32%', height:'100%', background:'#fff' }}/>
        </div>
        <span style={{ fontSize: 12, fontWeight: 600, color:'#fff' }}>1:30 / {video.duration}</span>
      </div>
    </div>
  );
}

// ── Inline share popover (desktop) ───────────────────────────────
function DSharePopover({ open, copied, onCopy, onClose }) {
  if (!open) return null;
  return (
    <div style={{
      position:'absolute', top:'calc(100% + 10px)', right: 0,
      background:'var(--ep-surface)',
      border:'1px solid var(--ep-border)',
      borderRadius:'var(--ep-r-md)',
      boxShadow:'var(--ep-shadow-lg)',
      padding: 14, width: 320, zIndex: 20,
    }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}>
        <span style={{ fontSize: 13, fontWeight: 700 }}>Compartilhar vídeo</span>
        <button onClick={onClose} style={{ color:'var(--ep-muted)' }}>{Ic.close(16)}</button>
      </div>
      <button
        onClick={onCopy}
        style={{
          width:'100%', textAlign:'left',
          display:'flex', alignItems:'center', gap: 10,
          padding: 10, borderRadius: 'var(--ep-r-sm)',
          background: copied ? 'var(--ep-new-tint)' : 'var(--ep-surface-2)',
          border:`1px solid ${copied ? 'var(--ep-new)' : 'var(--ep-border)'}`,
          transition:'background .2s, border-color .2s',
          marginBottom: 8,
        }}>
        <span style={{
          width: 32, height: 32, borderRadius: 8,
          background: copied ? 'var(--ep-new)' : 'var(--ep-surface)',
          color: copied ? '#fff' : 'var(--ep-ink-2)',
          display:'flex', alignItems:'center', justifyContent:'center',
          border:'1px solid var(--ep-border)',
        }}>
          {copied ? Ic.check(16) : Ic.link(16)}
        </span>
        <span style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600 }}>
            {copied ? 'Link copiado' : 'Copiar link'}
          </div>
          <div style={{ fontSize: 11.5, color:'var(--ep-muted)' }}>
            {copied ? 'Agora é só enviar para sua equipe.' : 'escola/videos/fotos-com-celular'}
          </div>
        </span>
      </button>
      <button style={{
        width:'100%', textAlign:'left',
        display:'flex', alignItems:'center', gap: 10,
        padding: 10, borderRadius:'var(--ep-r-sm)',
        background:'var(--ep-surface-2)', border:'1px solid var(--ep-border)',
      }}>
        <span style={{
          width: 32, height: 32, borderRadius: 8,
          background:'#25D366', color:'#fff',
          display:'flex', alignItems:'center', justifyContent:'center',
        }}>{Ic.whatsapp(16)}</span>
        <span style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 600 }}>WhatsApp</div>
          <div style={{ fontSize: 11.5, color:'var(--ep-muted)' }}>Compartilhar com sua equipe</div>
        </span>
      </button>
    </div>
  );
}

// ── Desktop video detail page ────────────────────────────────────
function DesktopVideo({ video, onBack }) {
  const v = video || lookup('menu-03');
  const [playing, setPlaying] = React.useState(true);
  const [share, setShare] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const related = TRACKS_FULL.find(t => t.id === v.trackId)?.videos.filter(x => x.id !== v.id).slice(0, 3) || [];

  return (
    <div className="ep-root" style={{
      width: D_W, background:'var(--ep-bg)', position:'relative',
      paddingBottom: 32,
    }}>
      <DHeader/>

      {/* Breadcrumb */}
      <div style={{
        padding:`20px ${D_PAD}px 8px`,
        display:'flex', alignItems:'center', gap: 8,
        fontSize: 13, color:'var(--ep-muted)',
      }}>
        <button onClick={onBack} className="ep-btn-ghost" style={{ padding:'4px 8px', fontSize: 13 }}>
          {Ic.back(14)} Voltar para Escola do Parceiro
        </button>
        <span style={{ opacity: 0.4 }}>·</span>
        <span style={{ color:'var(--ep-cta)', fontWeight: 700 }}>{v.trackTitle}</span>
      </div>

      <div style={{ padding: `8px ${D_PAD}px 32px`, display:'grid', gridTemplateColumns:'1.6fr 1fr', gap: 32 }}>
        {/* LEFT: player + meta */}
        <div style={{ display:'flex', flexDirection:'column', gap: 20 }}>
          <DVideoPlayer video={v} playing={playing} onTogglePlay={() => setPlaying(p => !p)}/>

          <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', gap: 16, flexWrap:'wrap' }}>
            <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
              <h1 style={{ fontSize: 32, lineHeight: 1.12, maxWidth: 560 }}>{v.title}</h1>
              <div style={{ display:'flex', gap: 14, alignItems:'center', fontSize: 13, color:'var(--ep-muted)' }}>
                <span style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>{Ic.clock(14)} {v.duration}</span>
                <span style={{ opacity: 0.4 }}>·</span>
                <span>Trilha: <strong style={{ color:'var(--ep-ink-2)' }}>{v.trackTitle}</strong></span>
                {v.badge && <Badge kind={v.badge}/>}
              </div>
            </div>
            <div style={{ position:'relative', display:'flex', gap: 10 }}>
              <button
                onClick={() => setShare(s => !s)}
                className="ep-btn-secondary">
                {Ic.share(15)} Compartilhar link
              </button>
              <DSharePopover open={share} copied={copied} onCopy={onCopy} onClose={() => setShare(false)}/>
              <button className="ep-btn-primary">
                {Ic.bolt(14)} Aplicar no meu cardápio
              </button>
            </div>
          </div>

          <p style={{ fontSize: 15.5, color:'var(--ep-ink-2)', lineHeight: 1.55, maxWidth: 680 }}>
            Aprenda cuidados simples de luz, enquadramento e fundo para deixar
            seus pratos mais atrativos usando apenas o celular. Em poucos minutos
            você consegue fotos que ajudam o cliente a escolher seu restaurante.
          </p>

          {/* Apply CTA strip (dark) */}
          <div style={{
            borderRadius:'var(--ep-r-lg)',
            background:'var(--ep-ink)',
            padding:'24px 28px',
            color:'#fff',
            display:'flex', alignItems:'center', justifyContent:'space-between', gap: 24,
            marginTop: 8,
          }}>
            <div>
              <h3 style={{ color:'#fff', fontSize: 20 }}>Aplique agora o que aprendeu</h3>
              <p style={{ fontSize: 14, color:'rgba(255,255,255,0.68)', marginTop: 4 }}>
                Abra o App do Restaurante e atualize as fotos do seu cardápio hoje.
              </p>
            </div>
            <div style={{ display:'flex', gap: 10 }}>
              <button className="ep-btn-primary">Abrir App {Ic.arrow(14)}</button>
              <button style={{
                padding:'13px 19px', borderRadius: 999,
                background:'transparent', color:'#fff', fontSize: 15, fontWeight: 600,
                border:'1px solid rgba(255,255,255,0.2)',
              }}>Ir para o Portal</button>
            </div>
          </div>
        </div>

        {/* RIGHT: related */}
        <aside style={{ display:'flex', flexDirection:'column', gap: 16 }}>
          <h3 style={{ fontSize: 18 }}>Conteúdos relacionados</h3>
          <div style={{ display:'flex', flexDirection:'column', gap: 12 }}>
            {related.map(r => (
              <button key={r.id} className="ep-card" style={{
                display:'flex', gap: 12,
                padding: 12,
                background:'var(--ep-surface)', border:'1px solid var(--ep-border)',
                borderRadius:'var(--ep-r-md)', textAlign:'left',
              }}>
                <div style={{ width: 140, flexShrink: 0 }}>
                  <Thumb palette={r.palette} label={r.title} duration={r.duration} height={84}/>
                </div>
                <div style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', gap: 4 }}>
                  <div style={{ fontSize: 11.5, color:'var(--ep-muted)' }}>{r.trackTitle}</div>
                  <div style={{
                    fontSize: 14, fontWeight: 600, lineHeight: 1.3,
                    display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: 2, overflow:'hidden',
                  }}>{r.title}</div>
                  <div style={{ fontSize: 12, color:'var(--ep-muted)', marginTop: 'auto' }}>{r.duration}</div>
                </div>
              </button>
            ))}
          </div>

          {/* track shelf */}
          <div style={{
            marginTop: 8, padding: 16,
            background:'var(--ep-surface-2)',
            border:'1px solid var(--ep-border)',
            borderRadius:'var(--ep-r-md)',
            display:'flex', flexDirection:'column', gap: 8,
          }}>
            <span style={{ fontSize: 11.5, color:'var(--ep-muted)', letterSpacing:'0.04em', textTransform:'uppercase', fontWeight: 600 }}>
              Da trilha
            </span>
            <h4 style={{ fontSize: 16, fontFamily:'var(--ep-font-display)', fontWeight: 700 }}>{v.trackTitle}</h4>
            <p style={{ fontSize: 13, color:'var(--ep-muted)' }}>
              Veja todos os {TRACKS_FULL.find(t => t.id === v.trackId)?.videos.length || 4} vídeos desta trilha.
            </p>
            <button className="ep-btn-ghost" style={{ alignSelf:'flex-start', fontSize: 13 }}>
              Ver trilha completa {Ic.arrow(13)}
            </button>
          </div>
        </aside>
      </div>

      <DFooter/>
    </div>
  );
}

Object.assign(window, { DesktopVideo, DVideoPlayer, DSharePopover });
