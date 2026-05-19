// ───── Escola do Parceiro · DESKTOP screens (1280px) ──────────────

const D_W = 1280;
const D_PAD = 56;     // page side padding desktop

// ── Desktop header (nav with links) ──────────────────────────────
function DHeader({ onSearch }) {
  return (
    <header style={{
      position:'sticky', top: 0, zIndex: 5,
      background:'rgba(255,253,250,0.92)',
      backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      borderBottom:'1px solid var(--ep-border)',
      padding:'14px 32px',
      display:'flex', alignItems:'center', justifyContent:'space-between',
    }}>
      <EPLogo size={16}/>
      <nav style={{
        display:'flex', alignItems:'center', gap: 4,
      }}>
        <a className="ep-btn-ghost" style={{ padding:'8px 14px', fontSize: 13.5 }}>Guias</a>
        <a className="ep-btn-ghost" style={{ padding:'8px 14px', fontSize: 13.5 }}>Portal do Restaurante</a>
        <a className="ep-btn-ghost" style={{ padding:'8px 14px', fontSize: 13.5 }}>Abrir App</a>
        <a className="ep-btn-ghost" style={{ padding:'8px 14px', fontSize: 13.5 }}>Home</a>
      </nav>
      <div style={{ display:'flex', alignItems:'center', gap: 10 }}>
        <div style={{
          display:'flex', alignItems:'center', gap: 8,
          padding:'9px 14px', borderRadius: 999,
          background:'var(--ep-surface-2)', border:'1px solid var(--ep-border)',
          color:'var(--ep-muted)', fontSize: 13, minWidth: 240,
        }}>
          {Ic.search(15)} Buscar vídeos por tema, dúvida ou trilha…
        </div>
      </div>
    </header>
  );
}

// ── Desktop hero ─────────────────────────────────────────────────
function DHero({ onScrollDown }) {
  return (
    <section style={{
      padding: `64px ${D_PAD}px 56px`,
      background:'var(--ep-primary)',
      position:'relative',
      display:'grid', gridTemplateColumns:'1.1fr 1fr', gap: 48, alignItems:'center',
    }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 22 }}>
        <div style={{
          display:'inline-flex', alignSelf:'flex-start',
          alignItems:'center', gap: 6,
          padding:'8px 14px', borderRadius: 999,
          background:'var(--ep-ink)',
          color:'#fff',
          fontSize: 13, fontWeight: 600,
        }}>
          {Ic.bolt(13)} Vídeos práticos de 3 a 5 minutos
        </div>
        <h1 style={{ fontSize: 60, lineHeight: 1.0, fontWeight: 800, letterSpacing:'-0.03em' }}>
          Aprenda em poucos&nbsp;minutos a vender melhor.
        </h1>
        <p style={{ fontSize: 17, color:'var(--ep-ink-2)', lineHeight: 1.5, maxWidth: 540 }}>
          Vídeos rápidos e práticos para melhorar o cardápio,
          divulgar seus produtos, configurar a plataforma e
          evitar prejuízos no dia a dia.
        </p>
        <div style={{ display:'flex', gap: 12, marginTop: 8 }}>
          <button className="ep-btn-primary" style={{ padding:'15px 22px', fontSize: 15 }}>
            {Ic.play(15)} Começar agora
          </button>
          <button style={{
            padding:'14px 20px', fontSize: 15, fontWeight: 600,
            borderRadius: 999,
            background:'rgba(31,24,20,0.08)',
            color:'var(--ep-ink)',
            border:'1px solid rgba(31,24,20,0.18)',
            display:'inline-flex', alignItems:'center', gap: 8,
          }}>
            Ver mais assistidos
          </button>
        </div>
        <div style={{ display:'flex', gap: 8, marginTop: 4 }}>
          <span style={{
            padding:'8px 14px', fontSize: 13, fontWeight: 500,
            borderRadius: 999,
            background:'rgba(255,255,255,0.55)',
            color:'var(--ep-ink-2)',
            border:'1px solid rgba(31,24,20,0.08)',
          }}>Conteúdo prático</span>
          <span style={{
            padding:'8px 14px', fontSize: 13, fontWeight: 500,
            borderRadius: 999,
            background:'rgba(255,255,255,0.55)',
            color:'var(--ep-ink-2)',
            border:'1px solid rgba(31,24,20,0.08)',
          }}>Feito para restaurantes parceiros</span>
        </div>
      </div>

      {/* hero composition — thumbnails floating on yellow */}
      <div style={{ position:'relative', height: 440 }}>
        {/* phone frame stylized */}
        <div style={{
          position:'absolute', left: 40, top: 24,
          width: 230, height: 400, borderRadius: 38,
          background:'#1a1410', padding: 8,
          boxShadow:'0 30px 60px rgba(31,24,20,.32), 0 12px 24px rgba(31,24,20,.20)',
          transform:'rotate(-5deg)',
        }}>
          <div style={{
            width:'100%', height:'100%', borderRadius: 30,
            background:'var(--ep-bg)', overflow:'hidden',
            display:'flex', flexDirection:'column',
          }}>
            <div style={{ padding:'14px 12px', borderBottom:'1px solid var(--ep-border)' }}>
              <EPLogo size={10}/>
            </div>
            <div style={{ padding: 12, display:'flex', flexDirection:'column', gap: 10, flex: 1 }}>
              <Thumb palette={['#FFEED1','#F1C16B','#B8852D']} label="Fotos com celular" duration="5 min" height={94}/>
              <div style={{ fontSize: 11, fontWeight: 600, lineHeight: 1.3 }}>Como tirar fotos melhores com o celular</div>
              <Thumb palette={['#FFD9D2','#F08A78','#A8392A']} label="Combos" duration="4 min" height={60}/>
            </div>
          </div>
        </div>
        {/* floating thumbnails */}
        <div style={{
          position:'absolute', right: 16, top: 32,
          width: 260, transform:'rotate(4deg)',
          boxShadow:'0 18px 40px rgba(31,24,20,.22)', borderRadius: 18, overflow:'hidden',
        }}>
          <Thumb palette={['#D9F0E0','#74C28B','#2E7A4A']} label="Instagram do restaurante" duration="5 min" height={150} radius={18}/>
        </div>
        <div style={{
          position:'absolute', right: 48, bottom: 16,
          width: 220, transform:'rotate(-3deg)',
          boxShadow:'0 18px 40px rgba(31,24,20,.22)', borderRadius: 18, overflow:'hidden',
        }}>
          <Thumb palette={['#E8E5F7','#A89BE3','#5A4BAB']} label="Promoções sem perder dinheiro" duration="5 min" height={130} radius={18}/>
        </div>
      </div>
    </section>
  );
}

// ── Desktop topic chips ──────────────────────────────────────────
function DTopics({ active, onPick }) {
  return (
    <section style={{ padding: `8px ${D_PAD}px 16px`, display:'flex', flexDirection:'column', gap: 14 }}>
      <p style={{ fontSize: 14, color:'var(--ep-muted)', fontWeight: 500 }}>
        Qual tema você quer melhorar hoje?
      </p>
      <div style={{ display:'flex', gap: 8, flexWrap:'wrap' }}>
        {TOPICS.map(t => (
          <button
            key={t.id}
            data-active={active === t.id}
            className="ep-chip"
            onClick={() => onPick && onPick(t.id)}
            style={{ padding:'10px 16px', fontSize: 14 }}>
            {t.label}
          </button>
        ))}
      </div>
    </section>
  );
}

// ── Desktop editorial banner ─────────────────────────────────────
function DBanner({ onOpen }) {
  const b = BANNER;
  return (
    <section style={{ padding: `16px ${D_PAD}px` }}>
      <button
        onClick={() => onOpen && onOpen(b)}
        className="ep-card"
        style={{
          width:'100%', textAlign:'left', padding: 0,
          background:'var(--ep-ink)', color:'#fff',
          borderRadius:'var(--ep-r-lg)', overflow:'hidden',
          display:'grid', gridTemplateColumns:'1.1fr 1fr', minHeight: 320,
        }}>
        <div style={{ padding: 48, display:'flex', flexDirection:'column', gap: 18, justifyContent:'center' }}>
          <div style={{
            display:'inline-flex', alignSelf:'flex-start',
            alignItems:'center', gap: 6,
            padding:'5px 12px', borderRadius: 999,
            background:'rgba(255,255,255,0.12)',
            fontSize: 12, fontWeight: 600,
            letterSpacing:'0.05em', textTransform:'uppercase',
          }}>{b.eyebrow}</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, color:'#fff', lineHeight: 1.12, textWrap:'pretty' }}>
            {b.title}
          </h2>
          <p style={{ fontSize: 16, color:'rgba(255,255,255,0.72)', lineHeight: 1.45, maxWidth: 460 }}>{b.desc}</p>
          <div style={{ display:'flex', alignItems:'center', gap: 16, marginTop: 8 }}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap: 8,
              padding:'14px 22px', borderRadius: 999,
              background:'var(--ep-cta)', color:'#fff',
              fontSize: 15, fontWeight: 600,
            }}>{Ic.play(15)} Assistir agora</span>
            <span style={{
              fontSize: 13, color:'rgba(255,255,255,0.65)',
              display:'inline-flex', alignItems:'center', gap: 6,
            }}>{Ic.clock(13)} {b.duration} · {b.track}</span>
          </div>
        </div>
        <div style={{ position:'relative', overflow:'hidden' }}>
          <Thumb palette={['#FFD9D2','#F08A78','#A8392A']} label={b.title} duration={null} height="100%" radius={0} large/>
          <div style={{
            position:'absolute', inset: 0,
            background:'linear-gradient(90deg, var(--ep-ink) 0%, transparent 25%, transparent 100%)',
          }}/>
        </div>
      </button>
    </section>
  );
}

// ── Desktop rail (uses Rail with bigger cards) ───────────────────
function DRail({ track, onOpen }) {
  return (
    <section style={{ padding: `0 ${D_PAD}px`, display:'flex', flexDirection:'column', gap: 16 }}>
      <header style={{ display:'flex', alignItems:'flex-end', justifyContent:'space-between', gap: 16 }}>
        <div>
          <h3 style={{ fontSize: 24 }}>{track.title}</h3>
          <p style={{ fontSize: 14, color:'var(--ep-muted)', marginTop: 4 }}>{track.desc}</p>
        </div>
        <button className="ep-btn-ghost" style={{ fontSize: 14 }}>
          Ver todos {Ic.arrow(14)}
        </button>
      </header>
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 20,
      }}>
        {track.videos.map(v => (
          <VideoCard key={v.id} video={v} thumbH={160} onOpen={onOpen}/>
        ))}
      </div>
    </section>
  );
}

// ── Desktop "Comece por aqui" — 4-col grid ───────────────────────
function DStartHere({ onOpen }) {
  return (
    <section style={{ padding: `0 ${D_PAD}px`, display:'flex', flexDirection:'column', gap: 16 }}>
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap: 16 }}>
        <div>
          <h3 style={{ fontSize: 24 }}>Comece por aqui</h3>
          <p style={{ fontSize: 14, color:'var(--ep-muted)', marginTop: 4 }}>
            Os primeiros vídeos para organizar a operação e começar com mais segurança.
          </p>
        </div>
      </header>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 20 }}>
        {START_HERE.map((v, i) => (
          <div key={v.id} style={{
            background:'var(--ep-surface)', border:'1px solid var(--ep-border)',
            borderRadius:'var(--ep-r-md)', padding: 14,
            display:'flex', flexDirection:'column', gap: 12,
          }}>
            <Thumb palette={v.palette} label={v.title} duration={v.duration} height={140}/>
            <div style={{ display:'flex', flexDirection:'column', gap: 6, padding:'4px 2px 2px' }}>
              <div style={{ display:'flex', alignItems:'center', gap: 6 }}>
                {i === 0 && <Badge kind="start"/>}
                <span style={{ fontSize: 12, color:'var(--ep-muted)' }}>{v.trackTitle}</span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, lineHeight: 1.3 }}>{v.title}</div>
              <div style={{ fontSize: 12, color:'var(--ep-muted)' }}>{v.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ── Desktop "Mais assistidos" — numbered row ─────────────────────
function DMostWatched({ onOpen }) {
  return (
    <section style={{ padding: `0 ${D_PAD}px`, display:'flex', flexDirection:'column', gap: 16 }}>
      <header>
        <h3 style={{ fontSize: 24 }}>Mais assistidos pelos parceiros</h3>
        <p style={{ fontSize: 14, color:'var(--ep-muted)', marginTop: 4 }}>
          Conteúdos rápidos que ajudam restaurantes a resolver dúvidas comuns do dia a dia.
        </p>
      </header>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 20 }}>
        {MOST_WATCHED.map((v, i) => (
          <NumberedCard key={v.id} video={v} n={i+1} onOpen={onOpen}/>
        ))}
      </div>
    </section>
  );
}

// ── Desktop CTA strip ────────────────────────────────────────────
function DMidCTA() {
  return (
    <section style={{ padding: `8px ${D_PAD}px` }}>
      <div style={{
        borderRadius:'var(--ep-r-lg)',
        background:'linear-gradient(115deg, var(--ep-primary-tint) 0%, var(--ep-primary-tint-2) 100%)',
        padding:'32px 40px',
        display:'flex', alignItems:'center', justifyContent:'space-between', gap: 32,
      }}>
        <div style={{ display:'flex', flexDirection:'column', gap: 8, maxWidth: 560 }}>
          <h3 style={{ fontSize: 26, color:'var(--ep-primary-deep)' }}>
            Precisa acessar suas ferramentas?
          </h3>
          <p style={{ fontSize: 15, color:'var(--ep-ink-2)' }}>
            Entre no Portal do Restaurante ou abra o App para aplicar o que aprendeu nos vídeos.
          </p>
        </div>
        <div style={{ display:'flex', gap: 12, flexShrink: 0 }}>
          <button className="ep-btn-primary">
            Ir para o Portal {Ic.arrow(14)}
          </button>
          <button className="ep-btn-secondary">
            Abrir App {Ic.arrow(14)}
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Desktop footer ───────────────────────────────────────────────
function DFooter() {
  return (
    <footer style={{
      padding: `40px ${D_PAD}px 48px`,
      borderTop:'1px solid var(--ep-border)',
      marginTop: 24,
      display:'flex', justifyContent:'space-between', gap: 40,
      flexWrap:'wrap',
    }}>
      <div style={{ display:'flex', flexDirection:'column', gap: 14, maxWidth: 360 }}>
        <EPLogo size={15}/>
        <p style={{ fontSize: 12.5, color:'var(--ep-muted)', lineHeight: 1.55 }}>
          Conteúdos criados para apoiar restaurantes parceiros no uso da plataforma.
        </p>
      </div>
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(4, auto)', gap: '8px 36px',
        fontSize: 13.5, color:'var(--ep-ink-2)', alignContent:'flex-start',
      }}>
        <a>Portal do Restaurante</a>
        <a>App da plataforma</a>
        <a>Home</a>
        <a>Ajuda</a>
      </div>
    </footer>
  );
}

// ── Desktop landing — composition ────────────────────────────────
function DesktopLanding({ onOpen }) {
  const [topic, setTopic] = React.useState('start');
  return (
    <div className="ep-root" style={{
      width: D_W, background:'var(--ep-bg)', position:'relative',
    }}>
      <DHeader/>
      <DHero/>
      <DTopics active={topic} onPick={setTopic}/>
      <DBanner onOpen={onOpen}/>

      <div style={{ display:'flex', flexDirection:'column', gap: 56, marginTop: 32 }}>
        {TRACKS_FULL.slice(0, 3).map(t => <DRail key={t.id} track={t} onOpen={onOpen}/>)}
        <DStartHere onOpen={onOpen}/>
        <DMostWatched onOpen={onOpen}/>
        {TRACKS_FULL.slice(3, 6).map(t => <DRail key={t.id} track={t} onOpen={onOpen}/>)}
        <DMidCTA/>
      </div>
      <DFooter/>
    </div>
  );
}

Object.assign(window, {
  DesktopLanding, DHeader, DHero, DTopics, DBanner, DRail,
  DStartHere, DMostWatched, DMidCTA, DFooter,
});
