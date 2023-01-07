export const generations = (selectGeneration) => {
    switch(selectGeneration) {
      case "gen-1":
        return "?limit=151&offset=0";
      case "gen-2":
        return "?limit=100&offset=151";
      case "gen-3":
        return "?limit=135&offset=251";
      case "gen-4":
        return "?limit=107&offset=386";
      case "gen-5":
        return "?limit=156&offset=493";
      case "gen-6":
        return "?limit=72&offset=649";
      case "gen-7":
        return "?limit=88&offset=721";
      case "gen-8":
        return "?limit=96&offset=809";
      case "gen-9":
        return "?limit=103&offset=905";
      default:
        return "?limit=151&offset=0";
    }
  };
