/**
 * Docs page collections require the following minimal dataset:
 *   name: [string] used in routes, ie.: /admin/collections/:slug/edit
 *   label: [string] used in CMS UI left nav
 *   label_singular: [string] used in CMS UI, ie.: 'New Post'
 *   description: [string] used in CMS UI
 */
const docsDefaults = (contentDirectory, imageDirectory) => ({
  folder: `content/en/docs/${contentDirectory}`,
  media_folder: `{{media_folder}}/${imageDirectory}`,
  public_folder: `{{public_folder}}/${imageDirectory}`,
  preview_path: `docs/${contentDirectory}/{{filename}}/`,
  create: true, // Allow users to create new documents in this collection
  delete: false, // Allow users to delete documents in this collection
  format: 'json-frontmatter', // Specify frontmatter for YAML or json-frontmatter for JSON
  fields: [
    { name: 'title', label: 'Title', widget: 'string' },
    { name: 'linkTitle', widget: 'hidden', required: false },
    { name: 'no_list', widget: 'hidden', required: false },
    { name: 'weight', widget: 'hidden', required: false },
    { name: 'date', widget: 'hidden', required: false },
    { name: 'description', label: 'Summary', widget: 'text' },
    { name: 'body', label: 'Body', widget: 'markdown' },
  ],
})

/**
 * Post collections require the same minimal dataset as docs pages.
 */
const postDefaults = {
  create: true,
  delete: false,
  fields: [
    { label: 'Title', name: 'title', widget: 'string' },
    { label: 'Author', name: 'author', widget: 'string' },
    { label: 'Publish Date', name: 'date', widget: 'datetime' },
    { label: 'Summary', name: 'description', widget: 'text' },
    { label: 'Image', name: 'image', widget: 'image', required: false },
    { label: 'Body', name: 'body', widget: 'markdown' },
  ],
}

/**
 * Add new collections here.
 */
const collections = [{
  ...docsDefaults('', 'docbook/images/general'), // content directory, image directory
  name: 'docs',
  label: 'Docs',
  description: 'Top level pages in documentation.',
  format: 'frontmatter',
  create: false,
}, {
  ...docsDefaults('apimgr_concepts', 'docbook/images/api_mgmt'),
  name: 'apimgr_concepts',
  label: 'API management concepts',
  label_singular: 'page in APIM concepts section',
  description: 'All pages relating to API management concepts',
}, {
  ...docsDefaults('apim_installation/apigtw_install', 'APIGateway'),
  name: 'apigtw_install',
  label: 'Install API Gateway',
  label_singular: 'page in APIG install section',
  description: 'All pages relating to installing API Gateway and API Manager.',
}, {
  ...docsDefaults('apim_installation/apiportal_install', 'APIPortal'),
  name: 'apiportal_install',
  label: 'Install or upgrade API Portal',
  label_singular: 'page in APIP install section',
  description: 'All pages relating to installing or upgrading API Portal.',
}, {
  ...docsDefaults('apim_installation/apigw_containers', 'APIPortal'),
  name: 'apigw_containers',
  label: 'Deploy API Gateway in containers',
  label_singular: 'page in APIG containers section',
  description: 'All pages relating to deploying API Gateway and API Manager in Docker containers.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apim_installation/apigw_docker', 'APIPortal'),
  name: 'apiportal_docker',
  label: 'Deploy API Portal in containers',
  label_singular: 'page in APIP containers section',
  description: 'All pages relating to deploying API Portal in containers.',
}, {
  ...docsDefaults('apim_installation/apigw_upgrade', 'UpgradeGuide'),
  name: 'apigw_upgrade',
  label: 'Upgrade API Gateway',
  label_singular: 'page in APIG upgrade section',
  description: 'All pages relating to upgrading API Gateway.',
}, {
  ...docsDefaults('apigm_multi_dc', 'APIGateway'),
  name: 'apimgmt_multi_dc',
  label: 'Configure API Manager in multi-DC',
  label_singular: 'page in APIM multi-DC section',
  description: 'All pages relating to configuring API Manager in multi-DC.',
}, {
  ...docsDefaults('apiportal_ha', 'APIPortal'),
  name: 'apiportal_ha',
  label: 'Configure API Portal for HA',
  label_singular: 'page in APIP HA section',
  description: 'All pages relating to configuring API Portal for HA.',
}, {
  ...docsDefaults('apigtw_devops', 'docbook/images/promotion'),
  name: 'apigtw_devops',
  label: 'Deploy to production',
  label_singular: 'page in APIG deploy section',
  description: 'All pages relating to deploying API Gateway configuration.',
}, {
  ...docsDefaults('apimanager_capacityguide', 'CapacityPlanningGuide'),
  name: 'apimanager_capacityguide',
  label: 'Capacity planning and performance',
  label_singular: 'page in APIM CPG section',
  description: 'All pages relating to capacity planning and performance tests.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apimgmt_security', 'docbook/images/security'),
  name: 'apimgmt_security',
  label: 'Security guidance',
  label_singular: 'page in APIM security section',
  description: 'All pages relating to security guidance for API Gateway, API Manager, and API Portal.',
}, {
  ...docsDefaults('apim_administration/apigtw_admin', 'APIPortal'),
  name: 'apigtw_admin',
  label: 'Administer API Gateway',
  label_singular: 'page in APIG admin section',
  description: 'All pages relating to administering API Gateway.',
}, {
  ...docsDefaults('apim_administration/apimgr_admin', 'docbook/images/api_mgmt'),
  name: 'apimgr_admin',
  label: 'Administer API Manager',
  label_singular: 'page in APIM admin section',
  description: 'All pages relating to administering API Manager.',
}, {
  ...docsDefaults('apim_administration/apimgr_admin/sso', 'docbook/images/api_mgmt'),
  name: 'apimgr_admin_sso',
  label: 'Administer API Manager (SSO)',
  label_singular: 'page in APIM SSO section',
  description: 'All pages relating to administering API Manager SSO.',
}, {
  ...docsDefaults('apim_administration/apiportal_admin', 'APIPortal'),
  name: 'apiportal_admin',
  label: 'Administer API Portal',
  label_singular: 'page in APIP admin section',
  description: 'All pages relating to administering API Portal.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apim_administration/apiportal_admin/sso', 'APIPortal'),
  name: 'apiportal_admin_sso',
  label: 'Administer API Portal (SSO)',
  label_singular: 'page in APIP SSO section',
  description: 'All pages relating to administering API Portal SSO.',
  format: 'frontmatter',
}, {
  ...docsDefaults('cass_admin', 'CassandraAdminGuide'),
  name: 'cass_admin',
  label: 'Administer Apache Cassandra',
  label_singular: 'page in Cassadra admin section',
  description: 'All pages relating to administering Apache Cassandra for API Gateway and API Manager.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apim_policydev/apigw_poldev', 'docbook/images/general'),
  name: 'apigw_poldev',
  label: 'Develop policies',
  label_singular: 'page in policy dev section',
  description: 'All pages relating to developing policies in Policy Studio.',
}, {
  ...docsDefaults('apim_policydev/apigw_poldev/external_connections', 'docbook/images/general'),
  name: 'apigw_poldev_external_connections',
  label: 'Develop policies (external connections)',
  label_singular: 'page in policy dev (ext conn) section',
  description: 'All pages relating to configuring external connections in Policy Studio.',
}, {
  ...docsDefaults('apim_policydev/apigw_poldev/gw_instances', 'docbook/images/general'),
  name: 'apigw_poldev_gw_instances',
  label: 'Develop policies (instances and listeners)',
  label_singular: 'page in policy dev (inst and listeners) section',
  description: 'All pages relating to configuring API Gateway instances and listeners in Policy Studio.',
}, {
  ...docsDefaults('apim_policydev/apigw_poldev/web_services', 'docbook/images/general'),
  name: 'apigw_poldev_web_services',
  label: 'Develop policies (web services)',
  label_singular: 'page in policy dev (web svcs) section',
  description: 'All pages relating to registering and securing web services in Policy Studio.',
}, {
  ...docsDefaults('apim_policydev/apigw_oauth', 'OAuth'),
  name: 'apigw_oauth',
  label: 'Configure OAuth',
  label_singular: 'page in OAuth config section',
  description: 'All pages relating to configuring OAuth in Policy Studio.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apim_policydev/apigw_oauth/oauth_flows', 'OAuth'),
  name: 'apigw_oauth_oauth_flows',
  label: 'Configure OAuth (flows)',
  label_singular: 'page in OAuth config (flows) section',
  description: 'All pages relating to OAuth authentication flows.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apim_policydev/apigw_polref', 'docbook/images/content'),
  name: 'apigw_polref',
  label: 'Policy filter reference',
  label_singular: 'page in pol filter ref section',
  description: 'All pages relating to filters in Policy Studio.',
}, {
  ...docsDefaults('apigtw_kerberos', 'IntegrationGuides/KerberosIntegration'),
  name: 'apigtw_kerberos',
  label: 'Integrate with Kerberos',
  label_singular: 'page in Kerberos section',
  description: 'All pages relating to integrating with Kerberos.',
}, {
  ...docsDefaults('apimanager_analytics', 'admin'),
  name: 'apimanager_analytics',
  label: 'Configure API Gateway Analytics',
  label_singular: 'page in APIG analytics section',
  description: 'All pages relating to configuring and using API Gateway Analytics.',
  format: 'frontmatter',
}, {
  ...docsDefaults('apigtw_devguide', 'APIGatewayDeveloperGuide'),
  name: 'apigtw_devguide',
  label: 'Extend API Gateway',
  label_singular: 'page in APIG extend section',
  description: 'All pages relating to extending and customizing API Gateway.',
}, {
  ...docsDefaults('apim_reference', 'APIGatewayDeveloperGuide'),
  name: 'apim_reference',
  label: 'Reference',
  label_singular: 'page in APIM ref section',
  description: 'All reference pages for API Gateway and API Manager.',
}, {
  ...docsDefaults('glossary', 'docbook/images/glossary'),
  name: 'glossary',
  label: 'Glossary',
  label_singular: 'page in glossary section',
  description: 'Glossary for API Management and AMPLIFY Central.',
  folder: 'content/en/docs/glossary',
}, {
  ...docsDefaults('apim_relnotes/20200130_apimgr_relnotes', 'docbook/images/release_notes'),
  name: '20200130_apimgr_relnotes',
  label: 'API Gateway and API Manager release notes',
  label_singular: 'page in API Gateway/Manager RN section',
  description: 'All pages relating to API Gateway and API Manager release.',
}, {
  ...docsDefaults('apim_relnotes/20200130_apip_relnotes', 'docbook/images/release_notes'),
  name: '20200130_apip_relnotes',
  label: 'API Portal release notes',
  label_singular: 'page in API Portal RN section',
  description: 'All pages relating to API Portal release.',
  format: 'frontmatter',
}, {
  ...docsDefaults('central', 'central'),
  name: 'central',
  label: 'AMPLIFY Central documentation',
  label_singular: 'page in AMPLIFY Central section',
  description: 'All pages relating to AMPLIFY Central.',
  format: 'frontmatter',
}, {
  ...docsDefaults('contribution_guidelines', 'contributing'),
  name: 'contribution_guidelines',
  label: 'Contribution guidelines',
  description: 'All pages relating to contributing to the documentation.',
  create: false,
  format: 'frontmatter',
}, {
  ...postDefaults,
  name: 'news',
  label: 'News posts',
  label_singular: 'News post',
  description: 'All news posts.',
  folder: 'content/en/blog/news',
}, {
  ...postDefaults,
  name: 'releases',
  label: 'Release posts',
  label_singular: 'Release post',
  description: 'All product release posts.',
  folder: 'content/en/blog/releases',
}, {
  ...postDefaults,
  name: 'friends',
  label: 'Friends posts',
  label_singular: 'Friends post',
  description: 'All friends of the doc posts.',
  folder: 'content/en/blog/friends',
}];

const config = {
  backend: {
    name: 'github',
    repo: 'Axway/axway-open-docs', //Path to your GitHub repository. For fork testing use alexearnshaw/axway-open-docs.
    open_authoring: true,
  },
  publish_mode: 'editorial_workflow',
  media_folder: '/static/Images', // Media files will be stored in the repo under static/Images
  public_folder: '/Images', // The src attribute for uploaded media will begin with /Images
  site_url: 'https://axway-open-docs.netlify.com/', // for fork testing use https://fork-axway-open-docs.netlify.com/
  collections,
};

// Make the config object available on the global scope for processing by
// subsequent scripts.Don't rename this to `CMS_CONFIG` - it will cause the
// config to be loaded without proper processing.
window.CMS_CONFIGURATION = config;

CMS.init({ config })
