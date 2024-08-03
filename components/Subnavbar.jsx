import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default  function Subnavbar() {  
    return(
        <>
            <Tabs defaultValue="account" className="w-full">
              <TabsList>
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="venue">Venue</TabsTrigger>
                <TabsTrigger value="paper_call">Call for Papers</TabsTrigger>
                <TabsTrigger value="date">Important Dates</TabsTrigger>
                <TabsTrigger value="committee">Committee</TabsTrigger>
                <TabsTrigger value="fees">Registration Fees (including GST)</TabsTrigger>

              </TabsList>
              <TabsContent value="about">
                About section
              </TabsContent>
              <TabsContent value="venue">
                venue
              </TabsContent>
              <TabsContent value="paper_call">
                Call for papers
              </TabsContent>
              <TabsContent value="date">
                date
              </TabsContent>
              <TabsContent value="committee">
                committee
              </TabsContent>
              <TabsContent value="fees">
                fees
              </TabsContent>
            </Tabs>
        </>
    )
}
