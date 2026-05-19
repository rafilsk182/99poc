// ───── Escola do Parceiro · catalog data ─────────────────────────────
// All content from briefing. No brand references; original copy variations
// where the original would have used 99Food-specific terms.

const PLATFORM = "Marketplace";    // generic stand-in (no proprietary brand)
const PRODUCT  = "Escola do Parceiro";

// thumbnail palette — each video gets a soft, color-coded SVG placeholder
// so the catalog reads as a real video catalog without faking imagery
const THUMB_PALETTES = {
  start:  ['#FFE5D0', '#FFB088', '#E0794F'], // soft coral
  menu:   ['#FFEED1', '#F1C16B', '#B8852D'], // amber
  price:  ['#E8E5F7', '#A89BE3', '#5A4BAB'], // indigo
  visi:   ['#FFD9D2', '#F08A78', '#A8392A'], // deep red
  mkt:    ['#D9F0E0', '#74C28B', '#2E7A4A'], // green
  ops:    ['#E2EBF2', '#7AA5C2', '#2E4C66'], // blue
};

const TRACKS = [
  {
    id: 'start',
    title: 'Começando',
    desc:  'Aprenda os primeiros passos para configurar sua operação e deixar seu restaurante pronto para vender.',
    palette: THUMB_PALETTES.start,
    videos: [
      { id: 'start-01', title: 'Como configurar seu cadastro na plataforma', duration: '4 min', badge: 'start' },
      { id: 'start-02', title: 'Como ajustar o horário de funcionamento',     duration: '3 min', badge: 'fast'  },
      { id: 'start-03', title: 'Como cadastrar e remover acessos da equipe',  duration: '5 min' },
      { id: 'start-04', title: 'Primeiros cuidados antes de começar a vender',duration: '4 min' },
    ],
  },
  {
    id: 'menu',
    title: 'Cardápio que vende',
    desc:  'Melhore seus produtos, descrições, fotos e organização para facilitar a escolha do cliente.',
    palette: THUMB_PALETTES.menu,
    videos: [
      { id: 'menu-01', title: 'Como deixar seu cardápio mais atrativo',         duration: '4 min', badge: 'pop' },
      { id: 'menu-02', title: 'Como escrever descrições que ajudam a vender',   duration: '3 min' },
      { id: 'menu-03', title: 'Como tirar fotos melhores com o celular',        duration: '5 min', badge: 'rec' },
      { id: 'menu-04', title: 'Como organizar categorias e itens do cardápio', duration: '4 min' },
    ],
  },
  {
    id: 'price',
    title: 'Preço sem prejuízo',
    desc:  'Cuidados simples para montar preços, descontos e combos sem comprometer sua margem.',
    palette: THUMB_PALETTES.price,
    videos: [
      { id: 'price-01', title: 'Como calcular promoções sem perder dinheiro', duration: '5 min', badge: 'rec' },
      { id: 'price-02', title: 'Cuidados antes de aplicar descontos',         duration: '4 min' },
      { id: 'price-03', title: 'Como criar combos com boa margem',            duration: '4 min', badge: 'new' },
      { id: 'price-04', title: 'Como revisar preços em dias de alta demanda', duration: '3 min' },
    ],
  },
  {
    id: 'visi',
    title: 'Visibilidade na plataforma',
    desc:  'Como campanhas, descontos e boas práticas ajudam seu restaurante a aparecer melhor.',
    palette: THUMB_PALETTES.visi,
    videos: [
      { id: 'visi-01', title: 'Como participar de campanhas da plataforma',     duration: '4 min' },
      { id: 'visi-02', title: 'Como usar descontos para atrair novos clientes', duration: '5 min' },
      { id: 'visi-03', title: 'Como destacar seus melhores produtos',           duration: '3 min' },
      { id: 'visi-04', title: 'O que influencia a escolha do cliente',          duration: '4 min', badge: 'pop' },
    ],
  },
  {
    id: 'mkt',
    title: 'Marketing simples que funciona',
    desc:  'Dicas práticas para divulgar seu restaurante, melhorar o Instagram e criar conteúdos melhores.',
    palette: THUMB_PALETTES.mkt,
    videos: [
      { id: 'mkt-01', title: 'Como melhorar o Instagram do seu restaurante', duration: '5 min', badge: 'pop' },
      { id: 'mkt-02', title: 'Como criar posts simples para vender mais',    duration: '4 min' },
      { id: 'mkt-03', title: 'Como usar fotos reais para gerar confiança',   duration: '3 min' },
      { id: 'mkt-04', title: 'Ideias de divulgação para datas especiais',    duration: '4 min' },
    ],
  },
  {
    id: 'ops',
    title: 'Operação do dia a dia',
    desc:  'Conteúdos rápidos para evitar erros, melhorar atendimento e organizar a rotina.',
    palette: THUMB_PALETTES.ops,
    videos: [
      { id: 'ops-01', title: 'Como evitar cancelamentos de pedidos',     duration: '4 min', badge: 'rec' },
      { id: 'ops-02', title: 'Como reduzir atrasos na preparação',       duration: '5 min' },
      { id: 'ops-03', title: 'Como organizar sua equipe nos horários de pico', duration: '4 min' },
      { id: 'ops-04', title: 'Boas práticas para atendimento ao cliente',duration: '3 min' },
    ],
  },
];

const TOPICS = [
  { id: 'start', label: 'Começando' },
  { id: 'menu',  label: 'Cardápio' },
  { id: 'sale',  label: 'Vendas' },
  { id: 'price', label: 'Preços' },
  { id: 'promo', label: 'Promoções' },
  { id: 'mkt',   label: 'Marketing' },
  { id: 'app',   label: 'App do Restaurante' },
  { id: 'ops',   label: 'Operação' },
];

const BADGES = {
  start: { label: 'Comece aqui', cls: 'start' },
  fast:  { label: 'Rápido',      cls: 'fast'  },
  pop:   { label: 'Popular',     cls: 'pop'   },
  rec:   { label: 'Recomendado', cls: 'rec'   },
  new:   { label: 'Novo',        cls: 'new'   },
};

// Editorial banner
const BANNER = {
  eyebrow:  'Destaque da semana',
  title:    'Como criar combos que ajudam seu restaurante a vender mais',
  desc:     'Dicas simples para montar ofertas atrativas sem comprometer sua margem.',
  duration: '4 min',
  track:    'Visibilidade na plataforma',
  badge:    'rec',
  videoId:  'banner-01',
};

// Curated rails
const lookup = (id) => {
  for (const t of TRACKS) {
    const v = t.videos.find(v => v.id === id);
    if (v) return { ...v, trackId: t.id, trackTitle: t.title, palette: t.palette };
  }
  return null;
};
const enrich = (track) => track.videos.map(v => ({
  ...v, trackId: track.id, trackTitle: track.title, palette: track.palette,
}));

const TRACKS_FULL = TRACKS.map(t => ({ ...t, videos: enrich(t) }));

const START_HERE = [
  lookup('start-01'),
  lookup('menu-01'),
  lookup('start-02'),
  lookup('start-04'),
];

const MOST_WATCHED = [
  lookup('menu-03'),
  lookup('price-01'),
  lookup('ops-01'),
  lookup('mkt-01'),
  lookup('visi-02'),
];

const NEW_VIDEOS = [
  { ...lookup('price-03'), badge: 'new' },
  { ...lookup('mkt-04'),   badge: 'new' },
  { ...lookup('price-04'), badge: 'new' },
  { ...lookup('visi-03'),  badge: 'new' },
];

// Tracking events documentation
const TRACKING_EVENTS = [
  ['page_view',              'Carga inicial da página'],
  ['click_video_card',       'Toque em qualquer card de vídeo'],
  ['open_video_page',        'Abertura da página individual'],
  ['video_play',             'Play no player'],
  ['video_pause',            'Pause no player'],
  ['video_progress_25',      'Progresso 25%'],
  ['video_progress_50',      'Progresso 50%'],
  ['video_progress_75',      'Progresso 75%'],
  ['video_complete',         'Vídeo concluído'],
  ['click_banner_featured',  'Toque no banner editorial'],
  ['click_bottom_nav',       'Toque em item da bottom nav'],
  ['click_external_portal',  'Saída para Portal'],
  ['click_external_app',     'Saída para App'],
  ['click_external_home',    'Saída para Home'],
  ['share_video_link',       'Compartilhamento de link'],
  ['click_topic_chip',       'Toque em chip de tema'],
];

const TRACKING_PARAMS = [
  'video_id', 'video_title', 'video_category', 'video_duration',
  'video_position', 'content_section', 'destination_url',
  'button_label', 'device_type',
];

Object.assign(window, {
  PLATFORM, PRODUCT, TRACKS_FULL, TOPICS, BADGES, BANNER,
  START_HERE, MOST_WATCHED, NEW_VIDEOS,
  TRACKING_EVENTS, TRACKING_PARAMS, lookup,
});
