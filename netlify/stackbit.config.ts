import { ContentstackContentSource } from '@stackbit/cms-contentstack';
import { ContentfulContentSource } from '@stackbit/cms-contentful';

import { defineStackbitConfig } from '@stackbit/types';

export default defineStackbitConfig({
    "stackbitVersion": "~0.6.0",
    "nodeVersion": "18",
    "ssgName": "custom",
    "contentSources": [
        new ContentfulContentSource({
            spaceId: process.env.CONTENTFUL_SPACE_ID!,
            environment: process.env.CONTENTFUL_ENVIRONMENT || 'master',
            previewToken: process.env.CONTENTFUL_PREVIEW_TOKEN!,
            accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN!
        }),

        new ContentstackContentSource({
            apiKey: process.env.CONTENTSTACK_API_KEY!,
            managementToken: process.env.CONTENTSTACK_MANAGEMENT_TOKEN!,
            authtoken: process.env.CONTENTSTACK_AUTHTOKEN,
            branch: process.env.CONTENTSTACK_BRANCH!,
            publishEnvironmentName: process.env.CONTENTSTACK_PUBLISH_ENV || 'production',
            skipFetchOnStartIfCache: true
        }),
        ],
    "postInstallCommand": "npm i --no-save @stackbit/types @stackbit/cms-contentful @stackbit/cms-contentstack"
})