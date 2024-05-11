import { Provider } from "@/providers";
import { getComponent } from "@/components/registryEntry";


export default async function Page2() {
  const ClientComponentLvl3 = getComponent('ClientComponentLvl3');

  return (
    <main>
      <Provider>
        <ClientComponentLvl3 />
      </Provider>
    </main>
  );
}
