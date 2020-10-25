<script>
	import TranslateArea from './../components/TranslateArea.svelte';
  import Header from '../components/Header.svelte';
  import { MyTabs, MyTab, TabList, SectionList, MySection } from '../components/tabs/SelfDefineTab';


  import { Card, CardBody, Col, Container, Row  } from 'sveltestrap';
  import { Tabs, Tab } from 'svelma'

  import { translate } from '../../scripts/translate';

  let input_sentence = "";
  let translate_type = 0;

  $: output_sentence = translate(input_sentence, translate_type);

  function tabchange (event) {
    translate_type = event.detail.value;
  }

</script>

<Header />

<Card class="card-container full-width-container">
  <CardBody>
    <Container>
      <Row>
        <Col xs="6">
          <Tabs>
            <Tab label="English">
              <TranslateArea bind:value={input_sentence} disabled={false}/>
            </Tab>
          </Tabs>
        </Col>
        <Col xs="6">
          <MyTabs>
            <TabList>
              <MyTab currentvalue={translate_type} on:tabchange={tabchange} tabvalue={0} text={"English"}/>
              <MyTab currentvalue={translate_type} on:tabchange={tabchange} tabvalue={1} text={"UwU"}/>
              <MyTab currentvalue={translate_type} on:tabchange={tabchange} tabvalue={2} text={"Mocking Spongbob"}/>
              <MyTab currentvalue={translate_type} on:tabchange={tabchange} tabvalue={3} text={"Reverse"}/>
              <MyTab currentvalue={translate_type} on:tabchange={tabchange} tabvalue={4} text={"camelCase"}/>
              <MyTab currentvalue={translate_type} on:tabchange={tabchange} tabvalue={5} text={"Politically Correct"}/>
            </TabList>
            <SectionList>
              {#each Array(6) as _, i}
                <MySection currentvalue={translate_type} tabvalue={i}>
                  <TranslateArea bind:value={output_sentence} disabled={true} />
                </MySection>
              {/each}
            </SectionList>
          </MyTabs>
        </Col>
      </Row>
    </Container>
  </CardBody>
</Card>