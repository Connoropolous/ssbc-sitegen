module.exports.page = function (opts) {
  return `<html>
    ${ module.exports.head({ title: opts.title }) }
    <body>
      ${ module.exports.topnav({ current: opts.section }) }
      <div id="layout">
        ${ module.exports.leftnav({ current: opts.path, section: opts.section }) }
        <div id="content">
          ${ opts.content }
        </div>
      </div>
    </body>
  </html>`
}

module.exports.head = function (opts) {
  return `<head>
    <title>${opts.title}</title>
    <link rel="stylesheet" href="/normalize.css">
    <link rel="stylesheet" href="/styles.css">
    <link rel="stylesheet" href="/monokai.css">
    <script src="/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
  </head>`
}

module.exports.topnav = function (opts) {
  function item (href, label, subtitle) {
    var isSelected = (href == opts.current)
    return `<a class="topnav-item ${isSelected ? 'selected' : ''}" href="${href}" title="${label}">
      ${label}${subtitle?`<br><small>${subtitle}</small>`:''}
    </a>`
  }

  return `<div id="topnav">
    <div id="topnav-inner">
      ${item('/', 'Home', 'SSBC')}
      ${item('/patchwork', 'Patchwork', 'Messaging App')}
      ${item('/scuttlebot', 'Scuttlebot', 'P2P Database')}
      ${item('/docs', 'Documentation', 'APIs, Tutorials, Whitepapers')}
    </div>
  </div>`
}

module.exports.leftnav = function (opts) {
  function item (href, label, subtitle) {
    var isSelected = (href == opts.current)
    return `<div class="leftnav-item ${isSelected ? 'selected' : ''}">
      <a href="${href}" title="${label}">${label}${subtitle?`<br><small>${subtitle}</small>`:''}</a>
    </div>`
  }

  if (opts.section === '/patchwork') {
    return `<div id="leftnav">
      ${item('/patchwork', 'Patchwork')}
      <div class="leftnav-subitems">
        ${item('/docs/patchwork/install.html', 'Install')}
        ${item('/docs/patchwork/help-faq.html', 'Help / FAQ')}
      </div>
    </div>`
  }
  if (opts.section === '/scuttlebot') {
    return `<div id="leftnav">
      ${item('/scuttlebot', 'Scuttlebot')}
      <div class="leftnav-subitems">
        ${item('/docs/scuttlebot/install.html', 'Install')}
        ${item('/docs/scuttlebot/tutorial.html', 'Tutorial')}
        ${item('/docs/scuttlebot/howto-setup-a-pub.html', 'HOWTO: Setup a Pub')}
      </div>
    </div>`
  }
  if (opts.section === '/docs') {
    return `<div id="leftnav">
      ${item('/secure-scuttlebutt', 'Secure Scuttlebutt', 'Database Protocol')}
      <div class="leftnav-subitems">
        ${item('/docs/ssb/learn.html', 'Learn about the Protocol')}
        ${item('/docs/ssb/secret-handshake.html', 'Secret Handshake')}
        ${item('/docs/ssb/end-to-end-encryption.html', 'End-to-end Encryption')}
      </div>
      <div class="leftnav-item">API Documentation</div>
      <div class="leftnav-subitems">
        ${item('/docs/api/scuttlebot.html', 'scuttlebot')}
        <div class="leftnav-indent">
          ${item('/docs/api/scuttlebot-blobs.html', 'blobs')}
          ${item('/docs/api/scuttlebot-block.html', 'block')}
          ${item('/docs/api/scuttlebot-friends.html', 'friends')}
          ${item('/docs/api/scuttlebot-gossip.html', 'gossip')}
          ${item('/docs/api/scuttlebot-invite.html', 'invite')}
          ${item('/docs/api/scuttlebot-replicate.html', 'replicate')}
        </div>
        ${item('/docs/api/ssb-msgs.html', 'ssb-msgs')}
        ${item('/docs/api/ssb-msg-schemas.html', 'ssb-msg-schemas')}
        ${item('/docs/api/ssb-ref.html', 'ssb-ref')}
        ${item('/docs/api/ssb-keys.html', 'ssb-keys')}
        ${item('/docs/api/ssb-config.html', 'ssb-config')}
        ${item('/docs/api/secret-stack.html', 'secret-stack')}
        ${item('/docs/api/muxrpc.html', 'muxrpc')}
        ${item('/docs/api/pull-stream.html', 'pull-stream')}
      </div>
      <div class="leftnav-item">Articles</div>
      <div class="leftnav-subitems">
        ${item('/docs/articles/design-challenge-avoid-centralization-and-singletons.html', 'Design Challenge: Avoiding Centralization and Singletons')}
        ${item('/docs/articles/design-challenge-sybil-attack.html', 'Design Challenge: Sybil Attacks')}
        ${item('/docs/articles/using-trust-in-open-networks.html', 'Using Trust in Open Networks')}
      </div>
    </div>`
  }
  return ''
}