import Page from '../layouts/main'
import Hero from '../components/hero'
import Section from '../components/section'
import Newsletter from '../components/newsletter'

import {Row, Col} from '../components/grid/index'

export default () => (
  <Page>
    <Hero
      title='Titre chili con carne'
      tagline='Tagline libérer les données sans effort et sur data.gouv.fr'
    />

    <Section title='Titre de section' subtitle='Sous-titre de section' theme='dark'>
      <Row>
        <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
        <Col>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
        <Col>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
      </Row>
    </Section>

    <Section title='Titre de section' subtitle='Sous-titre de section'>
      <Row>
        <Col>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
        <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
        <Col>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
        <Col>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Col>
      </Row>
    </Section>

    <Section title='Titre de section' subtitle='Sous-titre de section' theme='color'>
      <Row>
        <Col>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Col>
        <Col>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Col>
        <Col>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
      </Row>
    </Section>

    <Section theme='grey'>
      <Newsletter />
    </Section>

    {/* <!-- Piwik -->
    <!-- <script type="text/javascript">
      var _paq = _paq || [];
      _paq.push(["setDomains", ["*.template.data.gouv.fr,","*.etalab.github.io/template.data.gouv.fr"]]);
      _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="//stats.data.gouv.fr/";
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['setSiteId', 39]);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <noscript><Col><img src="//stats.data.gouv.fr/piwik.php?idsite=39" style="border:0;" alt="" /></Col></noscript> -->
    <!-- End Piwik Code --> */}
  </Page>
)
