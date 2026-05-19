// ───── Escola do Parceiro · MOBILE video detail (390px) ───────────

function MVideoPlayer({ video, playing, onTogglePlay }) {
  // Build a faux player using the same thumbnail aesthetic
  return (
    <div style={{
      position:'relative', width:'100%',
      aspectRatio:'16/9',
      background:`linear-gradient(135deg, ${video.palette[0]} 0%, ${video.palette[1]} 50%, ${video.palette[2]} 100%)`,
      overflow:'hidden',
    }}>
      {/* texture */}
      <svg width="100%" height="100%" style={{ position:'absolute', inset:0, opacity:0.18, mixBlendMode:'overlay' }}>
        <defs>
          <pattern id="player-stripes" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
            <line x1="0" y1="0" x2="0" y2="14" stroke="#fff" strokeWidth="1.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#player-stripes)"/>
      </svg>
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)' }}/>
      {/* big play button */}
      <button
        onClick={onTogglePlay}
        style={{
          position:'absolute', left:'50%', top:'50%',
          transform:'translate(-50%,-50%)',
          width: 76, height: 76, borderRadius: 999,
          background:'rgba(255,255,255,0.96)', color:'var(--ep-ink)',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 8px 32px rgba(0,0,0,.28)',
        }}>
        {playing ? (
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>
        ) : (
          Ic.play(30)
        )}
      </button>
      {/* progress bar */}
      <div style={{
        position:'absolute', left: 14, right: 14, bottom: 14,
        display:'flex', alignItems:'center', gap: 10,
      }}>
        <div style={{ flex: 1, height: 4, borderRadius: 999, background:'rgba(255,255,255,0.3)', overflow:'hidden' }}>
          <div style={{ width: '32%', height:'100%', background:'#fff' }}/>
        </div>
        <span style={{ fontSize: 11, fontWeight: 600, color:'#fff' }}>1:30 / {video.duration}</span>
      </div>
      {/* live state */}
      {playing && (
        <div style={{
          position:'absolute', left: 14, top: 14,
          display:'inline-flex', alignItems:'center', gap: 6,
          background:'rgba(0,0,0,0.55)', color:'#fff',
          padding:'4px 10px', borderRadius: 999,
          fontSize: 11, fontWeight: 600,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: 999, background:'#ff5050' }}/>
          Em reprodução
        </div>
      )}
    </div>
  );
}

// ── Mobile back/top bar ──────────────────────────────────────────
function MVideoTopbar({ onBack }) {
  return (
    <header style={{
      position:'sticky', top: 0, zIndex: 5,
      background:'rgba(255,253,250,0.92)',
      backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      borderBottom:'1px solid var(--ep-border)',
      padding:'10px 12px',
      display:'flex', alignItems:'center', justifyContent:'space-between', gap: 10,
    }}>
      <button onClick={onBack} style={{
        display:'inline-flex', alignItems:'center', gap: 6,
        padding:'8px 12px 8px 8px', borderRadius: 999,
        background:'var(--ep-surface-2)', color:'var(--ep-ink)',
        fontSize: 13, fontWeight: 600,
      }}>
        {Ic.back(16)} Voltar
      </button>
      <EPLogo size={11}/>
      <div style={{ width: 40 }}/>
    </header>
  );
}

// ── Share sheet (mobile) ─────────────────────────────────────────
function MShareSheet({ open, copied, onCopy, onClose }) {
  return (
    <div style={{
      position:'absolute', inset: 0,
      pointerEvents: open ? 'auto' : 'none',
      zIndex: 50,
    }}>
      {/* scrim */}
      <div onClick={onClose} style={{
        position:'absolute', inset: 0,
        background: open ? 'rgba(20,15,10,0.45)' : 'transparent',
        transition:'background .2s ease',
      }}/>
      {/* sheet */}
      <div style={{
        position:'absolute', left: 0, right: 0, bottom: 0,
        background:'var(--ep-surface)',
        borderRadius:'24px 24px 0 0',
        padding:'14px 16px 28px',
        transform: open ? 'translateY(0)' : 'translateY(100%)',
        transition:'transform .26s cubic-bezier(.2,.7,.3,1)',
        boxShadow:'0 -10px 40px rgba(20,15,10,0.18)',
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 999, background:'var(--ep-border-strong)', margin:'0 auto 14px' }}/>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 14 }}>
          <h3 style={{ fontSize: 17 }}>Compartilhar vídeo</h3>
          <button onClick={onClose} style={{ color:'var(--ep-muted)' }}>{Ic.close(20)}</button>
        </div>
        <p style={{ fontSize: 13, color:'var(--ep-muted)', marginBottom: 16 }}>
          Envie para sua equipe ou compartilhe direto no WhatsApp.
        </p>

        {/* link row */}
        <button
          onClick={onCopy}
          style={{
            width:'100%', display:'flex', alignItems:'center', gap: 12,
            padding:'14px 14px', borderRadius:'var(--ep-r-md)',
            background: copied ? 'var(--ep-new-tint)' : 'var(--ep-surface-2)',
            border: `1px solid ${copied ? 'var(--ep-new)' : 'var(--ep-border)'}`,
            transition:'background .2s, border-color .2s',
            color:'var(--ep-ink)',
          }}>
          <span style={{
            width: 36, height: 36, borderRadius: 10,
            background: copied ? 'var(--ep-new)' : 'var(--ep-surface)',
            color: copied ? '#fff' : 'var(--ep-ink-2)',
            display:'flex', alignItems:'center', justifyContent:'center',
            border:'1px solid var(--ep-border)',
          }}>
            {copied ? Ic.check(18) : Ic.link(18)}
          </span>
          <span style={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap: 1, textAlign:'left', flex: 1 }}>
            <span style={{ fontSize: 14, fontWeight: 600 }}>
              {copied ? 'Link copiado' : 'Copiar link'}
            </span>
            <span style={{ fontSize: 12, color:'var(--ep-muted)' }}>
              {copied ? 'Agora é só enviar para sua equipe.' : 'escola/videos/fotos-com-celular'}
            </span>
          </span>
        </button>

        {/* whatsapp row */}
        <button style={{
          width:'100%', display:'flex', alignItems:'center', gap: 12, marginTop: 10,
          padding:'14px 14px', borderRadius:'var(--ep-r-md)',
          background:'var(--ep-surface-2)',
          border:'1px solid var(--ep-border)',
          color:'var(--ep-ink)',
        }}>
          <span style={{
            width: 36, height: 36, borderRadius: 10,
            background:'#25D366', color:'#fff',
            display:'flex', alignItems:'center', justifyContent:'center',
          }}>
            {Ic.whatsapp(18)}
          </span>
          <span style={{ textAlign:'left', flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600 }}>WhatsApp</div>
            <div style={{ fontSize: 12, color:'var(--ep-muted)' }}>Compartilhar com sua equipe</div>
          </span>
        </button>
      </div>
    </div>
  );
}

// ── Mobile video detail page ─────────────────────────────────────
function MobileVideo({ video, onBack }) {
  const v = video || lookup('menu-03'); // default video for design canvas display
  const [playing, setPlaying] = React.useState(true);
  const [share, setShare] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  // related (from same track, excluding current)
  const related = TRACKS_FULL.find(t => t.id === v.trackId)?.videos.filter(x => x.id !== v.id).slice(0, 3) || [];

  return (
    <div className="ep-root" style={{
      width: M_W, minHeight: 844, position:'relative',
      background:'var(--ep-bg)',
      overflow:'hidden',
    }}>
      <MVideoTopbar onBack={onBack}/>

      <MVideoPlayer video={v} playing={playing} onTogglePlay={() => setPlaying(p => !p)}/>

      <div style={{ padding:'16px 16px 0', display:'flex', flexDirection:'column', gap: 10 }}>
        <div style={{
          fontSize: 11.5, color:'var(--ep-cta)',
          fontWeight: 700, letterSpacing:'0.04em', textTransform:'uppercase',
        }}>{v.trackTitle}</div>
        <h1 style={{ fontSize: 24, lineHeight: 1.15 }}>{v.title}</h1>
        <div style={{ display:'flex', gap: 12, alignItems:'center', fontSize: 12.5, color:'var(--ep-muted)' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap: 4 }}>{Ic.clock(13)} {v.duration}</span>
          {v.badge && <Badge kind={v.badge}/>}
        </div>
        <p style={{ fontSize: 14, color:'var(--ep-ink-2)', lineHeight: 1.5, marginTop: 4 }}>
          Aprenda cuidados simples de luz, enquadramento e fundo para deixar
          seus pratos mais atrativos usando apenas o celular.
        </p>
      </div>

      {/* CTAs */}
      <div style={{ padding:'18px 16px', display:'flex', flexDirection:'column', gap: 10 }}>
        <button className="ep-btn-primary" style={{ justifyContent:'center', padding:'14px 18px' }}>
          {Ic.bolt(15)} Aplicar no meu cardápio
        </button>
        <button
          onClick={() => setShare(true)}
          className="ep-btn-secondary"
          style={{ justifyContent:'center', padding:'13px 18px' }}>
          {Ic.share(16)} Compartilhar link
        </button>
      </div>

      {/* Related */}
      <section style={{ padding:'12px 16px 0', display:'flex', flexDirection:'column', gap: 12 }}>
        <h3 style={{ fontSize: 18 }}>Conteúdos relacionados</h3>
        <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
          {related.map(r => (
            <button key={r.id} className="ep-card" style={{
              display:'flex', gap: 12, padding: 10,
              background:'var(--ep-surface)', border:'1px solid var(--ep-border)',
              borderRadius:'var(--ep-r-md)', textAlign:'left',
            }}>
              <div style={{ width: 104, flexShrink: 0 }}>
                <Thumb palette={r.palette} label={r.title} duration={r.duration} height={70} />
              </div>
              <div style={{ flex: 1, minWidth: 0, display:'flex', flexDirection:'column', gap: 4 }}>
                <div style={{ fontSize: 11.5, color:'var(--ep-muted)' }}>{r.trackTitle}</div>
                <div style={{
                  fontSize: 14, fontWeight: 600, lineHeight: 1.3,
                  display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: 2, overflow:'hidden',
                }}>{r.title}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Apply CTA strip */}
      <section style={{ padding:'24px 16px 32px' }}>
        <div style={{
          borderRadius:'var(--ep-r-lg)',
          background:'var(--ep-ink)',
          padding: 18,
          color:'#fff',
          display:'flex', flexDirection:'column', gap: 10,
        }}>
          <h3 style={{ color:'#fff', fontSize: 17 }}>Aplique agora o que aprendeu</h3>
          <p style={{ fontSize: 13, color:'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>
            Abra o App do Restaurante e atualize as fotos do seu cardápio hoje.
          </p>
          <button className="ep-btn-primary" style={{
            justifyContent:'center', padding:'12px 16px', fontSize: 13.5, marginTop: 4,
          }}>
            Abrir App {Ic.arrow(14)}
          </button>
        </div>
      </section>

      <MFooter/>
      <MBottomNav active="book"/>

      <MShareSheet
        open={share}
        copied={copied}
        onCopy={onCopy}
        onClose={() => setShare(false)}/>
    </div>
  );
}

Object.assign(window, { MobileVideo, MShareSheet, MVideoPlayer });
