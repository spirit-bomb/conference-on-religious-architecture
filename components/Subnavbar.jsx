import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default  function Subnavbar() {  
    return(
        <>
            <Tabs defaultValue="about" className="w-full">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="venue">Venue</TabsTrigger>
                <TabsTrigger value="paper_call">Call for Papers</TabsTrigger>
                <TabsTrigger value="date">Important Dates</TabsTrigger>
                <TabsTrigger value="committee">Committee</TabsTrigger>
                <TabsTrigger value="fees">Registration Fees (including GST)</TabsTrigger>

              </TabsList>
              <TabsContent value="about">
                about component goes here
              </TabsContent>
              <TabsContent value="venue">
                venue component goes here
              </TabsContent>
              <TabsContent value="paper_call">
                Call for papers component goes here
              </TabsContent>
              <TabsContent value="date">
                date component goes here
              </TabsContent>
              <TabsContent value="committee">
                committee component goes here
              </TabsContent>
              <TabsContent value="fees">
                fees component goes here
              </TabsContent>
            </Tabs>
        </>
    )
}
