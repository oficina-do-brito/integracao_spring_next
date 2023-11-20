import Sidebar from "@/components/Sidebar";
import View from "@/components/Views";
import FragmentPacotes from "@/components/Views/FragmentPacotes";

export default function Manage({children}) {
  return (
      <main>
        <div className={"container-fluid p-0 m-0 h-auto"}>
          <div className={"row p-0 m-0 h-auto"}>

            <Sidebar></Sidebar>
            <View>
              <FragmentPacotes />
            </View>
            
          </div>
        </div>
      </main>
  );
}
