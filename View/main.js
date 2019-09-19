const V = module.exports = {}

V.layout = (title, content) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
      <div>
        <section id="content">
          ${content}
        </section>
      </div>
    </body>
  </html>
  `
}

V.index = () => {
  let content = `
    <a href="/signup">註冊</a>
  `
  return V.layout("首頁", content)
}

V.signup = () => {
  let content = `
    <form action="/checkuser" method="post">
      <p><input type="text" name="account" /></p>
      <p><input type="password" name="password" /></p>
      <p><input type="submit" value="註冊" /></p>
    </form>
  `
  return V.layout("註冊", content)
}
