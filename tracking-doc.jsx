// ───── Escola do Parceiro · Tracking docs card ────────────────────

function TrackingDoc() {
  return (
    <div className="ep-root" style={{
      width: 880, padding: 40,
      background:'var(--ep-bg)',
      borderRadius: 'var(--ep-r-lg)',
      display:'flex', flexDirection:'column', gap: 24,
    }}>
      <header style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', gap: 24 }}>
        <div>
          <div style={{
            display:'inline-flex', alignItems:'center', gap: 6,
            padding:'5px 11px', borderRadius: 999,
            background:'var(--ep-primary-tint)', color:'var(--ep-primary-deep)',
            fontSize: 11.5, fontWeight: 600, marginBottom: 12,
            letterSpacing:'0.05em', textTransform:'uppercase',
          }}>
            Documentação · GA4 / GTM
          </div>
          <h2 style={{ fontSize: 28 }}>Tracking & analytics</h2>
          <p style={{ fontSize: 14, color:'var(--ep-muted)', marginTop: 6, maxWidth: 560 }}>
            Eventos e parâmetros sugeridos para medir comportamento de descoberta,
            consumo de vídeo e cliques de saída para Portal/App/Home.
          </p>
        </div>
        <EPLogo size={13}/>
      </header>

      {/* events */}
      <section style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        <h3 style={{ fontSize: 16, fontFamily:'var(--ep-font-display)' }}>Eventos esperados</h3>
        <div style={{
          display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap: 8,
          background:'var(--ep-surface)',
          border:'1px solid var(--ep-border)',
          borderRadius:'var(--ep-r-md)',
          padding: 8,
        }}>
          {TRACKING_EVENTS.map(([k, d], i) => (
            <div key={k} style={{
              display:'flex', gap: 14, padding:'10px 12px',
              borderRadius:'var(--ep-r-sm)',
              alignItems:'flex-start',
              background: i % 2 === 0 ? 'transparent' : 'var(--ep-surface-2)',
            }}>
              <span style={{
                marginTop: 2,
                width: 22, height: 22, borderRadius: 6,
                background:'var(--ep-primary-tint)', color:'var(--ep-primary-deep)',
                fontSize: 10, fontWeight: 700,
                display:'flex', alignItems:'center', justifyContent:'center',
                fontFamily:'ui-monospace, Menlo, monospace',
                flexShrink: 0,
              }}>{String(i+1).padStart(2,'0')}</span>
              <div style={{ minWidth: 0 }}>
                <div style={{
                  fontFamily:'ui-monospace, Menlo, monospace',
                  fontSize: 12.5, fontWeight: 600, color:'var(--ep-ink)',
                }}>{k}</div>
                <div style={{ fontSize: 12, color:'var(--ep-muted)', marginTop: 2 }}>{d}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* params */}
      <section style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        <h3 style={{ fontSize: 16, fontFamily:'var(--ep-font-display)' }}>Parâmetros recomendados</h3>
        <div style={{ display:'flex', flexWrap:'wrap', gap: 6 }}>
          {TRACKING_PARAMS.map(p => (
            <span key={p} style={{
              padding:'6px 11px', borderRadius: 999,
              background:'var(--ep-surface)', border:'1px solid var(--ep-border)',
              fontFamily:'ui-monospace, Menlo, monospace',
              fontSize: 12, color:'var(--ep-ink-2)', fontWeight: 500,
            }}>{p}</span>
          ))}
        </div>
      </section>

      {/* notes */}
      <section style={{ display:'flex', flexDirection:'column', gap: 12 }}>
        <h3 style={{ fontSize: 16, fontFamily:'var(--ep-font-display)' }}>Observações técnicas</h3>
        <ul style={{ display:'flex', flexDirection:'column', gap: 8, padding: 0, listStyle:'none' }}>
          {[
            'YouTube embed: usar YouTube IFrame API para medir play, pause e progresso (25 / 50 / 75 / 100).',
            'Player próprio: hookar nos eventos disponíveis no player CDN.',
            'Conteúdo estático (sem CMS). Catálogo em JSON simples.',
            'device_type detectado por user-agent. Default mobile.',
          ].map(t => (
            <li key={t} style={{
              fontSize: 13.5, color:'var(--ep-ink-2)', lineHeight: 1.45,
              display:'flex', gap: 10, alignItems:'flex-start',
              padding:'10px 14px',
              background:'var(--ep-surface)',
              border:'1px solid var(--ep-border)',
              borderRadius:'var(--ep-r-sm)',
            }}>
              <span style={{
                marginTop: 6, flexShrink: 0,
                width: 5, height: 5, borderRadius: 999, background:'var(--ep-primary)',
              }}/>
              {t}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

// ── States gallery (interaction states reference) ────────────────
function StatesGallery() {
  const [copied, setCopied] = React.useState(false);
  const v = lookup('menu-03');

  return (
    <div className="ep-root" style={{
      width: 880, padding: 40,
      background:'var(--ep-bg)',
      borderRadius:'var(--ep-r-lg)',
      display:'flex', flexDirection:'column', gap: 28,
    }}>
      <header>
        <div style={{
          display:'inline-flex', alignItems:'center', gap: 6,
          padding:'5px 11px', borderRadius: 999,
          background:'var(--ep-primary-tint)', color:'var(--ep-primary-deep)',
          fontSize: 11.5, fontWeight: 600, marginBottom: 12,
          letterSpacing:'0.05em', textTransform:'uppercase',
        }}>Estados de interação</div>
        <h2 style={{ fontSize: 28 }}>Microinterações & feedback</h2>
        <p style={{ fontSize: 14, color:'var(--ep-muted)', marginTop: 6 }}>
          Card hover, link copiado, conteúdo novo, conteúdo popular, vídeo em reprodução.
        </p>
      </header>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 20 }}>
        {/* default card */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <span style={{ fontSize: 12, color:'var(--ep-muted)', fontWeight: 600, letterSpacing:'0.04em', textTransform:'uppercase' }}>
            01 · Padrão
          </span>
          <div style={{ pointerEvents:'none' }}>
            <VideoCard video={v} thumbH={140}/>
          </div>
        </div>

        {/* hover state */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <span style={{ fontSize: 12, color:'var(--ep-muted)', fontWeight: 600, letterSpacing:'0.04em', textTransform:'uppercase' }}>
            02 · Hover / toque
          </span>
          <div style={{
            transform:'translateY(-2px)',
            boxShadow:'var(--ep-shadow)', borderRadius:'var(--ep-r-md)',
          }}>
            <VideoCard video={v} thumbH={140}/>
          </div>
        </div>

        {/* novo */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <span style={{ fontSize: 12, color:'var(--ep-muted)', fontWeight: 600, letterSpacing:'0.04em', textTransform:'uppercase' }}>
            03 · Conteúdo novo
          </span>
          <div style={{ pointerEvents:'none' }}>
            <VideoCard
              video={{ ...lookup('price-03'), badge: 'new' }}
              thumbH={140}/>
          </div>
        </div>

        {/* popular */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <span style={{ fontSize: 12, color:'var(--ep-muted)', fontWeight: 600, letterSpacing:'0.04em', textTransform:'uppercase' }}>
            04 · Popular
          </span>
          <div style={{ pointerEvents:'none' }}>
            <VideoCard video={lookup('mkt-01')} thumbH={140}/>
          </div>
        </div>

        {/* link copiado */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <span style={{ fontSize: 12, color:'var(--ep-muted)', fontWeight: 600, letterSpacing:'0.04em', textTransform:'uppercase' }}>
            05 · Link copiado
          </span>
          <div style={{
            display:'flex', alignItems:'center', gap: 12,
            padding:'14px 14px',
            borderRadius:'var(--ep-r-md)',
            background:'var(--ep-new-tint)',
            border:'1px solid var(--ep-new)',
          }}>
            <span style={{
              width: 36, height: 36, borderRadius: 10,
              background:'var(--ep-new)', color:'#fff',
              display:'flex', alignItems:'center', justifyContent:'center',
            }}>{Ic.check(18)}</span>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Link copiado</div>
              <div style={{ fontSize: 12, color:'var(--ep-ink-2)' }}>Agora é só enviar para sua equipe.</div>
            </div>
          </div>
        </div>

        {/* vídeo em reprodução */}
        <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
          <span style={{ fontSize: 12, color:'var(--ep-muted)', fontWeight: 600, letterSpacing:'0.04em', textTransform:'uppercase' }}>
            06 · Em reprodução
          </span>
          <div style={{
            position:'relative', width:'100%', aspectRatio:'16/9',
            background:`linear-gradient(135deg, ${v.palette[0]} 0%, ${v.palette[1]} 50%, ${v.palette[2]} 100%)`,
            borderRadius:'var(--ep-r-md)', overflow:'hidden',
          }}>
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.45) 100%)' }}/>
            <div style={{
              position:'absolute', left: 10, top: 10,
              display:'inline-flex', alignItems:'center', gap: 6,
              background:'rgba(0,0,0,0.55)', color:'#fff',
              padding:'4px 10px', borderRadius: 999,
              fontSize: 10.5, fontWeight: 600,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background:'#ff5050' }}/>
              Em reprodução
            </div>
            <div style={{
              position:'absolute', left: 10, right: 10, bottom: 10,
              display:'flex', alignItems:'center', gap: 8,
            }}>
              <div style={{ flex: 1, height: 3, borderRadius: 999, background:'rgba(255,255,255,0.3)' }}>
                <div style={{ width:'42%', height:'100%', background:'#fff', borderRadius: 999 }}/>
              </div>
              <span style={{ fontSize: 10, color:'#fff', fontWeight: 600 }}>2:06 / {v.duration}</span>
            </div>
          </div>
        </div>
      </div>

      {/* component shelf */}
      <section>
        <h3 style={{ fontSize: 16, fontFamily:'var(--ep-font-display)', marginBottom: 16 }}>
          Selos & componentes
        </h3>
        <div style={{ display:'flex', flexWrap:'wrap', gap: 10, alignItems:'center' }}>
          <Badge kind="new"/>
          <Badge kind="pop"/>
          <Badge kind="rec"/>
          <Badge kind="start"/>
          <Badge kind="fast"/>
          <span style={{ width: 14, height: 1, background:'var(--ep-border)' }}/>
          <span className="ep-chip">Cardápio</span>
          <span className="ep-chip" data-active="true">Promoções</span>
          <span style={{ width: 14, height: 1, background:'var(--ep-border)' }}/>
          <button className="ep-btn-primary" style={{ padding:'10px 16px', fontSize: 13 }}>
            {Ic.play(13)} Começar
          </button>
          <button className="ep-btn-secondary" style={{ padding:'9px 14px', fontSize: 13 }}>
            Compartilhar
          </button>
        </div>
      </section>
    </div>
  );
}

Object.assign(window, { TrackingDoc, StatesGallery });
