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
    allContentJson(filter: {}) {
      nodes {
        team {
          asysty
          bramki
          mecze
          cKartki
          name
          pozycja
          numer
          zKartki
          zdjecia
          minuty
        }
      }
    }
  }
  
  `);
  console.log(resultPlayers)
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

