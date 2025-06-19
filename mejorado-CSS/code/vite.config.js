import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input:{
                main: resolve(__dirname, 'index.html'),
                avisolegal: resolve(__dirname, 'aviso-legal.html'),
                blog: resolve(__dirname, 'blog.html'),
                contacto: resolve(__dirname, 'contacto.html'),
                cursos: resolve(__dirname, 'cursos.html'),
                login: resolve(__dirname, 'login.html'),
                quienessomos: resolve(__dirname, 'quienes-somos.html'),
                registro: resolve(__dirname, 'registro.html'),
                noticia1: resolve(__dirname, 'noticia1.html'),
                noticia2: resolve(__dirname, 'noticia2.html'),
                curso1: resolve(__dirname, 'curso1.html'),
                curso2: resolve(__dirname, 'curso2.html')
            }
        }
    },
    base: './',
    server: {
        watch: {
            usePolling: true,
        }
    }
});
