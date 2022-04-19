const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "/content/mecze/" }
          frontmatter: {}
        }
      ) {
        nodes {
          frontmatter {
            czas
            data
            gospodarze
            logoEnemy
            miejsce
            pftGoals
            przeciwnik
            thumbnail
            godzina
            pftGoals
            BramkiPFT {
              Zawodnicy
              minuta
            }
            Zmiany {
              ZmianaNa
              ZmianaZ
              minuta
            }
            Zawodnicy {
              Zawodnicy
              minuty
            }
            Sztab {
              zespolSenior
            }
            Kartki {
              Zawodnicy
              kartka
              minuta
            }
          }
        }
      }
    }
  `);
  const templatePath = path.resolve(`src/components/Organism/ElStat.js`);
  console.log(result);
  result.data.allMarkdownRemark.nodes.forEach((node) => {
    createPage({
      path: `/mecze/${node.frontmatter.gospodarze}-${node.frontmatter.przeciwnik}-${node.frontmatter.data}`,
      component: templatePath,
      context: {
        slug: node,
      },
    });
  });



  const resultPlayers = await graphql(`
    {
      allContentJson {
        nodes {
          team {
            name
            pozycja
          }
        }
      }
    }
  `);

  const templatePathPlayers = path.resolve(`src/components/Organism/Player.js`);
  resultPlayers.data.allContentJson.nodes.forEach((node) => {
    
    node?.team?.forEach((node) => {
      createPage({
        path: `/kadra/${node.name}`,
        component: templatePathPlayers,
        context: {
          slug: node,
        },
      });
    });
  });
};
