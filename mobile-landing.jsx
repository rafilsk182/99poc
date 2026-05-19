// ───── Escola do Parceiro · MOBILE screens (390px) ────────────────

const M_W = 390;          // mobile artboard width

// ── Header (mobile) ──────────────────────────────────────────────
function MHeader({ onSearch }) {
  return (
    <header style={{
      position:'sticky', top: 0, zIndex: 5,
      background:'rgba(255,253,250,0.92)',
      backdropFilter:'blur(12px)',
      WebkitBackdropFilter:'blur(12px)',
      borderBottom:'1px solid var(--ep-border)',
      padding:'12px 16px',
      display:'flex', alignItems:'center', justifyContent:'space-between', gap: 12,
    }}>
      <EPLogo size={13} />
      <button
        aria-label="Buscar"
        onClick={onSearch}
        style={{
          width: 40, height: 40, borderRadius: 999,
          background:'var(--ep-surface-2)',
          border:'1px solid var(--ep-border)',
          display:'flex', alignItems:'center', justifyContent:'center',
          color:'var(--ep-ink)',
        }}>
        {Ic.search(18)}
      </button>
    </header>
  );
}

// ── Hero (mobile) ────────────────────────────────────────────────
function MHero() {
  return (
    <section style={{
      padding:'28px 16px 28px',
      background:'var(--ep-primary)',
      display:'flex', flexDirection:'column', gap: 16,
      position:'relative',
    }}>
      <div style={{
        display:'inline-flex', alignSelf:'flex-start',
        alignItems:'center', gap: 6,
        padding:'7px 13px', borderRadius: 999,
        background:'var(--ep-ink)',
        color:'#fff',
        fontSize: 12, fontWeight: 600,
      }}>
        {Ic.bolt(12)} Vídeos de 3 a 5 minutos
      </div>
      <h1 style={{ fontSize: 32, lineHeight: 1.05, fontWeight: 800, letterSpacing:'-0.025em' }}>
        Aprenda em poucos minutos a vender melhor.
      </h1>
      <p style={{ fontSize: 15, color:'var(--ep-ink-2)', lineHeight: 1.45 }}>
        Vídeos rápidos e práticos para melhorar o cardápio,
        divulgar seus produtos, configurar a plataforma e
        evitar prejuízos no dia a dia.
      </p>
      <div style={{ display:'flex', gap: 8, flexWrap:'wrap', marginTop: 4 }}>
        <button className="ep-btn-primary" style={{ padding:'13px 18px', fontSize: 14 }}>
          {Ic.play(15)} Começar agora
        </button>
        <button style={{
          padding:'12px 16px', fontSize: 14, fontWeight: 600,
          borderRadius: 999,
          background:'rgba(31,24,20,0.08)',
          color:'var(--ep-ink)',
          border:'1px solid rgba(31,24,20,0.18)',
          display:'inline-flex', alignItems:'center', gap: 8,
        }}>
          Mais assistidos
        </button>
      </div>
      <div style={{ display:'flex', gap: 6, flexWrap:'wrap', marginTop: 4 }}>
        <span style={{
          padding:'6px 10px', fontSize: 11.5, fontWeight: 500,
          borderRadius: 999,
          background:'rgba(255,255,255,0.55)',
          color:'var(--ep-ink-2)',
          border:'1px solid rgba(31,24,20,0.08)',
        }}>Prático</span>
        <span style={{
          padding:'6px 10px', fontSize: 11.5, fontWeight: 500,
          borderRadius: 999,
          background:'rgba(255,255,255,0.55)',
          color:'var(--ep-ink-2)',
          border:'1px solid rgba(31,24,20,0.08)',
        }}>Para restaurantes parceiros</span>
      </div>
    </section>
  );
}

// ── Topic chips row (mobile) ─────────────────────────────────────
function MTopics({ active, onPick }) {
  return (
    <section style={{ padding:'8px 0 12px' }}>
      <p style={{ padding:'0 16px 10px', fontSize: 13, color:'var(--ep-muted)', fontWeight: 500 }}>
        Qual tema você quer melhorar hoje?
      </p>
      <div className="ep-rail" style={{
        display:'flex', gap: 8, padding:'0 16px',
        overflowX:'auto', overflowY:'hidden',
      }}>
        {TOPICS.map(t => (
          <button
            key={t.id}
            data-active={active === t.id}
            className="ep-chip"
            onClick={() => onPick && onPick(t.id)}>
            {t.label}
          </button>
        ))}
      </div>
    </section>
  );
}

// ── Editorial banner (mobile) ────────────────────────────────────
function MBanner({ onOpen }) {
  const b = BANNER;
  return (
    <section style={{ padding:'8px 16px 4px' }}>
      <button
        onClick={() => onOpen && onOpen(b)}
        className="ep-card"
        style={{
          width:'100%', textAlign:'left', display:'block',
          background:'var(--ep-ink)', color:'#fff',
          borderRadius: 'var(--ep-r-lg)', overflow:'hidden',
          position:'relative',
          padding: 0,
        }}>
        <div style={{ position:'relative', height: 180 }}>
          <Thumb palette={['#FFD9D2','#F08A78','#A8392A']}
                 label={b.title}
                 height={180}
                 radius={0}
                 large/>
          {/* gradient to ink */}
          <div style={{
            position:'absolute', inset: 0,
            background:'linear-gradient(180deg, transparent 30%, rgba(20,15,10,0.85) 100%)',
          }}/>
        </div>
        <div style={{ padding: 18, display:'flex', flexDirection:'column', gap: 8 }}>
          <div style={{
            display:'inline-flex', alignSelf:'flex-start',
            alignItems:'center', gap: 6,
            padding:'4px 10px', borderRadius: 999,
            background:'rgba(255,255,255,0.12)',
            fontSize: 11.5, fontWeight: 600,
            letterSpacing:'0.04em', textTransform:'uppercase',
          }}>{b.eyebrow}</div>
          <h2 style={{ fontSize: 22, fontWeight: 800, color:'#fff', lineHeight: 1.15 }}>{b.title}</h2>
          <p style={{ fontSize: 13.5, color:'rgba(255,255,255,0.75)', lineHeight: 1.4 }}>{b.desc}</p>
          <div style={{
            display:'flex', alignItems:'center', justifyContent:'space-between',
            marginTop: 6,
          }}>
            <span style={{
              display:'inline-flex', alignItems:'center', gap: 8,
              padding:'10px 16px', borderRadius: 999,
              background:'var(--ep-cta)', color:'#fff',
              fontSize: 13.5, fontWeight: 600,
            }}>{Ic.play(13)} Assistir agora</span>
            <span style={{
              fontSize: 12, color:'rgba(255,255,255,0.65)',
              display:'inline-flex', alignItems:'center', gap: 6,
            }}>{Ic.clock(12)} {b.duration} · {b.track}</span>
          </div>
        </div>
      </button>
    </section>
  );
}

// ── "Comece por aqui" vertical list (mobile) ─────────────────────
function MStartHere({ onOpen }) {
  return (
    <section style={{ padding:'24px 16px 4px', display:'flex', flexDirection:'column', gap: 12 }}>
      <header style={{ display:'flex', flexDirection:'column', gap: 4 }}>
        <h3 style={{ fontSize: 20 }}>Comece por aqui</h3>
        <p style={{ fontSize: 13, color:'var(--ep-muted)', textWrap:'pretty' }}>
          Os primeiros vídeos para organizar sua operação com mais segurança.
        </p>
      </header>
      <div style={{ display:'flex', flexDirection:'column', gap: 10, marginTop: 4 }}>
        {START_HERE.map((v, i) => (
          <button
            key={v.id}
            className="ep-card"
            onClick={() => onOpen(v)}
            style={{
              display:'flex', gap: 12, alignItems:'stretch',
              background:'var(--ep-surface)',
              border:'1px solid var(--ep-border)',
              borderRadius: 'var(--ep-r-md)',
              padding: 10, textAlign:'left',
            }}>
            <div style={{ width: 116, flexShrink: 0 }}>
              <Thumb palette={v.palette} label={v.title} duration={v.duration} height={80} />
            </div>
            <div style={{ flex: 1, display:'flex', flexDirection:'column', gap: 6, paddingTop: 2, minWidth: 0 }}>
              <div style={{ display:'flex', gap: 6, alignItems:'center', flexWrap:'wrap' }}>
                {i === 0 && <Badge kind="start"/>}
                <span style={{ fontSize: 11.5, color:'var(--ep-muted)' }}>{v.trackTitle}</span>
              </div>
              <div style={{
                fontSize: 14, fontWeight: 600, lineHeight: 1.3, color:'var(--ep-ink)',
                display:'-webkit-box', WebkitBoxOrient:'vertical', WebkitLineClamp: 2, overflow:'hidden',
              }}>{v.title}</div>
              <div style={{ marginTop:'auto', fontSize: 12, color:'var(--ep-muted)' }}>
                {v.duration}
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}

// ── CTA midpage ──────────────────────────────────────────────────
function MMidCTA() {
  return (
    <section style={{ padding:'24px 16px' }}>
      <div style={{
        borderRadius:'var(--ep-r-lg)',
        background:'linear-gradient(135deg, var(--ep-primary-tint) 0%, var(--ep-primary-tint-2) 100%)',
        padding: 20,
        display:'flex', flexDirection:'column', gap: 14,
      }}>
        <h3 style={{ fontSize: 19, color:'var(--ep-primary-deep)' }}>
          Precisa acessar suas ferramentas?
        </h3>
        <p style={{ fontSize: 13.5, color:'var(--ep-ink-2)', lineHeight: 1.4 }}>
          Entre no Portal do Restaurante ou abra o App para aplicar o que aprendeu nos vídeos.
        </p>
        <div style={{ display:'flex', gap: 8, flexWrap:'wrap' }}>
          <button className="ep-btn-primary" style={{ padding:'11px 16px', fontSize: 13.5 }}>
            Portal do Restaurante {Ic.arrow(13)}
          </button>
          <button className="ep-btn-secondary" style={{ padding:'10px 14px', fontSize: 13.5 }}>
            Abrir App {Ic.arrow(13)}
          </button>
        </div>
      </div>
    </section>
  );
}

// ── Footer (mobile) ──────────────────────────────────────────────
function MFooter() {
  return (
    <footer style={{
      padding:'28px 16px 100px',  // 100px to clear bottom nav
      borderTop:'1px solid var(--ep-border)',
      marginTop: 12,
      display:'flex', flexDirection:'column', gap: 16,
    }}>
      <EPLogo size={13} />
      <div style={{
        display:'grid', gridTemplateColumns:'1fr 1fr', gap: 10,
        fontSize: 13.5, color:'var(--ep-ink-2)',
      }}>
        <a>Portal do Restaurante</a>
        <a>App da plataforma</a>
        <a>Home</a>
        <a>Ajuda</a>
      </div>
      <p style={{ fontSize: 11.5, color:'var(--ep-muted)', lineHeight: 1.5 }}>
        Conteúdos criados para apoiar restaurantes parceiros no uso da plataforma.
      </p>
    </footer>
  );
}

// ── Bottom nav (fixed) ───────────────────────────────────────────
function MBottomNav({ active = 'book' }) {
  const items = [
    { id: 'book',   icon: Ic.book,   label: 'Guias'  },
    { id: 'portal', icon: Ic.portal, label: 'Portal' },
    { id: 'app',    icon: Ic.app,    label: 'App'    },
    { id: 'home',   icon: Ic.home,   label: 'Home'   },
  ];
  return (
    <nav style={{
      position:'absolute', left: 0, right: 0, bottom: 0,
      height: 78,
      background:'rgba(255,253,250,0.95)',
      backdropFilter:'blur(14px)',
      WebkitBackdropFilter:'blur(14px)',
      borderTop:'1px solid var(--ep-border)',
      display:'grid', gridTemplateColumns:'repeat(4, 1fr)',
      paddingBottom: 14, paddingTop: 8,
    }}>
      {items.map(it => {
        const isActive = it.id === active;
        return (
          <button key={it.id} style={{
            display:'flex', flexDirection:'column', alignItems:'center',
            justifyContent:'center', gap: 4,
            color: isActive ? 'var(--ep-cta)' : 'var(--ep-muted)',
          }}>
            <span style={{
              width: 32, height: 32, borderRadius: 12,
              display:'flex', alignItems:'center', justifyContent:'center',
              background: isActive ? 'var(--ep-cta-tint)' : 'transparent',
            }}>
              {it.icon(20)}
            </span>
            <span style={{ fontSize: 11, fontWeight: 600 }}>{it.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

// ── Mobile landing — full page composition ───────────────────────
function MobileLanding({ onOpen }) {
  const [topic, setTopic] = React.useState('start');
  return (
    <div className="ep-root" style={{
      width: M_W, minHeight: 844, position:'relative',
      background:'var(--ep-bg)',
      overflow:'hidden',
    }}>
      <MHeader/>
      <MHero/>
      <MTopics active={topic} onPick={setTopic}/>
      <MBanner onOpen={onOpen}/>
      {/* Trilhas */}
      <div style={{ display:'flex', flexDirection:'column', gap: 28, marginTop: 28 }}>
        {TRACKS_FULL.slice(0, 3).map(t => (
          <Rail key={t.id} title={t.title} desc={t.desc} onSeeAll={() => {}}>
            {t.videos.map(v => (
              <VideoCard key={v.id} video={v} width={220} thumbH={124} onOpen={onOpen}/>
            ))}
          </Rail>
        ))}

        <MStartHere onOpen={onOpen}/>

        {/* Mais assistidos */}
        <section style={{ display:'flex', flexDirection:'column', gap: 12 }}>
          <header style={{ padding:'0 16px', display:'flex', flexDirection:'column', gap: 4 }}>
            <h3 style={{ fontSize: 20 }}>Mais assistidos pelos parceiros</h3>
            <p style={{ fontSize: 13, color:'var(--ep-muted)', textWrap:'pretty' }}>
              Conteúdos rápidos que resolvem dúvidas comuns do dia a dia.
            </p>
          </header>
          <div className="ep-rail" style={{
            display:'flex', gap: 14, overflowX:'auto', overflowY:'hidden',
            padding:'12px 16px 6px',
          }}>
            {MOST_WATCHED.map((v, i) => (
              <NumberedCard key={v.id} video={v} n={i+1} width={196} onOpen={onOpen}/>
            ))}
          </div>
        </section>

        {/* Continued trilhas */}
        {TRACKS_FULL.slice(3, 6).map(t => (
          <Rail key={t.id} title={t.title} desc={t.desc} onSeeAll={() => {}}>
            {t.videos.map(v => (
              <VideoCard key={v.id} video={v} width={220} thumbH={124} onOpen={onOpen}/>
            ))}
          </Rail>
        ))}

        {/* Novos conteúdos */}
        <section style={{ display:'flex', flexDirection:'column', gap: 12 }}>
          <header style={{ padding:'0 16px', display:'flex', flexDirection:'column', gap: 4 }}>
            <h3 style={{ fontSize: 20 }}>Novos conteúdos</h3>
            <p style={{ fontSize: 13, color:'var(--ep-muted)' }}>
              Os vídeos mais recentes da Escola do Parceiro.
            </p>
          </header>
          <div className="ep-rail" style={{
            display:'flex', gap: 12, overflowX:'auto', overflowY:'hidden',
            padding:'4px 16px 6px',
          }}>
            {NEW_VIDEOS.map(v => (
              <VideoCard key={v.id} video={v} width={220} thumbH={124} onOpen={onOpen}/>
            ))}
          </div>
        </section>

        <MMidCTA/>
      </div>
      <MFooter/>
      <MBottomNav active="book"/>
    </div>
  );
}

Object.assign(window, {
  MobileLanding, MHeader, MHero, MTopics, MBanner, MStartHere, MMidCTA,
  MFooter, MBottomNav,
});
