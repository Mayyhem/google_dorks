// Copies all URLs on a Google search results page
javascript:with(document)a=body.appendChild(createElement('textarea')),a.value=[...querySelectorAll`div.r>a:first-child`].map(n=>n.href).join`\n`,a.select(),execCommand("copy")
