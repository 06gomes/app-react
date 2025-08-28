import React from "react";
import { PaperProvider } from "react-native-paper";

const App: React.FC = () => {
  return (
    <PaperProvider>
      <CitacaoScreen />
    </PaperProvider>
  );
};

export default App;