# Reference feature inventory

## Scope and handling

The supplied-reference review is a requirements-discovery activity only. The independent application is branded **Horizon Atlas** and uses an original React/Vite source layout. No reference source, proprietary artwork, or credentials should be copied into this repository. The reference archive was not available in the initialized workspace; the inventory below records the requested review categories and should be verified against the archive when it is supplied.

## Feature inventory

| Area | Features to assess | Implementation boundary |
| --- | --- | --- |
| Globe | Interactive 3D globe, geographic navigation, zoom, and location markers. | Select an independently licensed rendering stack and original visual treatment. |
| Layer providers | Switchable basemaps, overlays, attribution, and provider availability. | Use provider-approved endpoints and show required attribution. |
| Camera and tracking | Camera presets, follow mode, orbit/fly-to transitions, and live-position tracking. | Obtain clear user consent for geolocation; no tracking starts by default. |
| Scenes | Named viewpoints, saved camera states, story/scene sequencing, and scene controls. | Define a new scene data model and unique authored content. |
| Search and routing | Place lookup, suggestions, route planning, route display, and error/empty states. | Integrate independently licensed geocoding and routing services behind adapters. |
| Sharing | Permalinks, copied views, share dialogs, and import/export of public state. | Encode only deliberate, non-sensitive state in share URLs. |
| Voice | Microphone activation, speech commands, transcripts, feedback, and unsupported-browser behavior. | Make voice opt-in and provide a complete non-voice control path. |
| Styling | Theme, typography, panels, motion, responsive layout, map controls, and accessibility states. | Establish Horizon Atlas tokens and components; do not reproduce proprietary visual assets. |
| Tests | Unit, integration, end-to-end, visual, and accessibility coverage. | Use Vitest for unit/component coverage and Playwright for browser flows. |
| API-key dependencies | Imagery, terrain, geocoding, routing, search, and telemetry keys; required scopes and rate limits. | Keep keys in environment variables, publish only placeholders in `.env.example`, and never commit secrets. |

## Milestone 1 decisions

- Start with the Vite + React + TypeScript foundation and the scripts declared in `package.json`.
- Treat map and search providers as configuration, not as embedded source or keys.
- Add concrete provider choices only after their licensing, attribution, quotas, and privacy implications have been reviewed.
