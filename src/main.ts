import { Elysia, t } from 'elysia';

// plugin 

const plugin = new Elysia()
    .state('plugin-version', 1)

// router for bun run 

const app = new Elysia()

// use plugin

    .state('plugin-version', 1)
    .use(plugin)
    .get('/plugin', ({ store }) => store['plugin-version'])

// redirect

.get('/redirect', ({ set }) => {
        set.redirect = '/'
    })

// json

    .get('/json', () => ({
        hi: 'Elysia'
    }))

// state

    .state('version', '0.0.1')
    .decorate('getDate', () => Date.now())
    .get('/version', ({ 
        getDate, 
        store: { version } 
    }) => `${version} ${getDate()}`)

    .get('/version_json', ({
      store: { version }
    }) => ({
        version: version 
    }))

// basic

 .get('/', () => 'hello ming')
 .get('/ping', () => 'pong')
 .get('/id/:id', ({ params: { id } }) => id)

// set headers
// curl -v http://localhost:3000/set_header

    .get('/set_header', ({ set }) => {
        set.status = 418
        set.headers['x-powered-by'] = 'Elysia'

        return 'I\'m teapod'
    })

// file, could be json, txt, png, tsx, html and so on

 .get('/file', () => new Response(Bun.file("./public/index.html"), {
      headers: { "Content-Type": "text/html" },
    }))

// fetch

 .get('/fetch',
 async (req) => {
    console.log(req.url)
    return new Response(file);
  })

// advanced

// group

    .group("/auth", app => {
        return app
            .get("/", () => "Hi")
            .post("/sign-in", ({ body }) => body)
            .put("/sign-up", ({ body }) => body)
    })


// gaurd

    .guard({
        response: t.String()
    }, (app) => app
        .get('/hi', () => 'Hi is a t.String')
        // Invalid: will throws error, and TypeScript will report error
        .get('/invalid', () => 1)
    )

// export default for bun to run this file

export default app
