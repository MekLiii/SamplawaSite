const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
  {
    allContentJson(filter: {sezon: {elemMatch: {sezon: {ne: null}}}}) {
      nodes {
        sezon {
          mecz {
            Statystyki {
              BramkiPFT {
                Zawodnicy
                minuta
              }
              BramkiPrzeciwnika {
                minuta
                Zawodnicy
                name
              }
              Zmiany {
                ZmianaNa
                ZmianaZ
                minuta
              }
            }
            Zawodnicy {
              CKartki
              ZKartki
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
};
