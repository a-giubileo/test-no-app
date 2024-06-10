import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";

export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "cwNJDRXHqEHS6mpimH2khu",
      token: "pCpXXukL94qRJVb4jUXSipUtjYugbRvbdcPV4ReCRgTOjp2QzfRXHucWpsfwepg6JfMO0PAs2Moc2zAkKU0og",
    },
  ],
  host: "https://builder.yurekai.com",
  // By default Builder YurekAI will use the last published version of your project.
  // For development, you can set preview to true, which will use the unpublished
  // project, allowing you to see your designs without publishing.  Please
  // only use this for development, as this is significantly slower.
  preview: false,
});
