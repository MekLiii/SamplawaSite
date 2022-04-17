const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allContentJson(filter: {sezon: {elemMatch: {sezon: {ne: null}, mecz: {}}}}) {
      nodes {
        sezon {
          mecz {
            Zawodnicy {
              Zawodnicy
              minuty
            }
            data
            godzina
            gospodarze
            miejsce
            przeciwnik
            enemyGoals
            pftGoals
            Statystyki {
              Zmiany {
                ZmianaNa
                ZmianaZ
                minuta
              }
            }
            Sztab {
              zespolSenior
            }
          }
        }
      }
    }
  }
  
  `);
  const templatePath = path.resolve(`src/components/Organism/ElStat.js`);
  result.data.allContentJson.nodes.forEach((node) => {
    node.sezon.forEach((node) => {
      node.mecz.forEach((node) => {
        createPage({
          path: `/mecze/${node.gospodarze}-${node.przeciwnik}`,
          component: templatePath,
          context: {
            slug: node,
          },
        });
      });
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


// query MyQuery {
//   allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/mecze/"}}) {
//     nodes {
//       frontmatter {
//         Zawodnicy {
//           Zawodnicy
//           minuty
//         }
//         czas
//         data
//         enemyGoals
//         godzina
//         gospodarze
//         logoEnemy
//         pftGoals
//         miejsce
//         opis
//         pftGoals
//         price
//         przeciwnik
//         thumbnail
//         Zmiany {
//           ZmianaNa
//           ZmianaZ
//           minuta
//         }
//         Sztab {
//           zespolSenior
//         }
//         Kartki {
//           Zawodnicy
//           minuta
//           kartka
//         }
//         BramkiPrzeciwnika {
//           name
//           minuta
//         }
//         BramkiPFT {
//           Zawodnicy
//           minuta
//         }
//       }
//     }
//   }
// }
