import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },

  collections: {
    posts: collection({
      label: 'Entradas del Blog',
      slugField: 'title',
      path: 'src/data/post/*/',
      entryLayout: 'content',

      format: {
        contentField: 'content',
      },

      schema: {
        title: fields.slug({
          name: {
            label: 'Título',
            validation: {
              isRequired: true,
            },
          },
        }),

        excerpt: fields.text({
          label: 'Extracto / Descripción (SEO)',
          multiline: true,
        }),

        publishDate: fields.date({
          label: 'Fecha de publicación',
          defaultValue: {
            kind: 'today',
          },
        }),

        image: fields.text({
          label: 'Imagen de portada (URL)',
        }),

        imageAlt: fields.text({
          label: 'Texto alternativo de la imagen',
        }),

        draft: fields.checkbox({
          label: 'Borrador',
          defaultValue: false,
        }),

        category: fields.text({
          label: 'Categoría',
        }),

        tags: fields.array(
          fields.text({
            label: 'Etiqueta',
          }),
          {
            label: 'Etiquetas',
            itemLabel: (props) => props.value,
          }
        ),

        author: fields.text({
          label: 'Autor',
        }),

        content: fields.markdoc({
          label: 'Contenido del artículo',
          extension: 'md',
          options: {
            image: {
              directory: 'public/images/blog/',
              publicPath: '/images/blog/',
            },
          },
        }),
      },
    }),

    pages: collection({
      label: 'Páginas',
      slugField: 'title',
      path: 'src/data/pages/*/',
      entryLayout: 'content',

      format: {
        contentField: 'content',
      },

      schema: {
        title: fields.slug({
          name: {
            label: 'Título',
            validation: {
              isRequired: true,
            },
          },
        }),

        description: fields.text({
          label: 'Descripción (SEO)',
          multiline: true,
        }),
        
pageType: fields.select({
  label: 'Tipo de página',
  options: [
    { label: 'Institucional', value: 'institutional' },
    { label: 'Servicios', value: 'service' },
    { label: 'Aprende', value: 'learning' },
  ],
  defaultValue: 'institutional',
}),
   
        image: fields.text({
          label: 'Imagen de portada (URL)',
        }),

        imageAlt: fields.text({
          label: 'Texto alternativo de la imagen',
        }),

        draft: fields.checkbox({
          label: 'Borrador',
          defaultValue: false,
        }),

        urlPath: fields.text({
          label: 'Ruta URL',
          description: 'Ejemplo: servicios/cloud-infrastructure (sin / inicial)',
       }),

        content: fields.markdoc({
          label: 'Contenido de la página',
          extension: 'md',
          options: {
            image: {
              directory: 'public/images/pages/',
              publicPath: '/images/pages/',
            },
          },
        }),
      },
    }),
  },
});