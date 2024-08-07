import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./About";
import Venue from "./Venue";
import PaperCall from "./PaperCall";
import ImpDate from "./ImpDate";
import Commitee from "./Commitee";
import Fees from "./Fees";
import Guidelines from "./Guidelines";

export default  function Subnavbar() {  
    return(
        <>
            <Tabs defaultValue="about" className="w-full md:px-6">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="venue">Venue</TabsTrigger>
                <TabsTrigger value="paper_call">Call for Papers</TabsTrigger>
                <TabsTrigger value="date">Important Dates</TabsTrigger>
                <TabsTrigger value="committee">Committee</TabsTrigger>
                <TabsTrigger value="guidelines">Guidelines</TabsTrigger>
                <TabsTrigger value="fees">Registration Fees (including GST)</TabsTrigger>
              </TabsList>
              <TabsContent value="about" className=''>
                <About/>
              </TabsContent>
              <TabsContent value="venue">
                <Venue/>
              </TabsContent>
              <TabsContent value="paper_call">
                <PaperCall/>
              </TabsContent>
              <TabsContent value="date">
                <ImpDate/>
              </TabsContent>
              <TabsContent value="committee">
                <Commitee/>
              </TabsContent>
              <TabsContent value="guidelines">
                <Guidelines/>
              </TabsContent>
              <TabsContent value="fees">
                <Fees/>
              </TabsContent>
            </Tabs>
        </>
    )
}
