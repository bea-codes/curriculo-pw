Parse.initialize("cA4PcXV1EXrM5QtRlFMOg01o83UIGN7Rcr3aDBxA", "DjR3nwAVerspadg6XwWHb8xIfku89UdRMs21HnSf"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
Parse.serverURL = "https://parseapi.back4app.com/";



const projeto = Parse.Object.extend("Projeto");

const listaProjetos = document.getElementById("lista-projetos");

const lerProjetos = async () => {
    const query = new Parse.Query("Projeto");
    try {
      const results = await query.find();
      listaProjetos.innerHTML = "";
      for (const items of results) {
        const nome = items.get("Nome");
        const link = items.get("Link");
        const liProjeto = document.createElement("li");
        const aLista = document.createElement("a");
        aLista.href = link;
        aLista.target = "_blank";
        aLista.innerHTML = `${nome}`;
        /*const textNode = document.createTextNode(
          `<a href="${link}">${nome}</a> `
        );*/
        liProjeto.appendChild(aLista);
        listaProjetos.appendChild(liProjeto);
      }
    } catch (error) {
      console.error("Error while fetching Nome", error);
    }
  };


  lerProjetos();