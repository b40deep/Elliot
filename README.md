# Elliot's journal

A reflective journal that shows you the past as you jot down the present. Imagine typing June 6th 2026's journal entry, and seeing the past June 6th entries from 2025, 2024, and beyond.
This idea was from a conversation with my wife who mentioned that Jim Elliot used to keep a journal that showed him what he'd been doing, feeling, thinking in the past year(s), for each day he wrote in it.

## setup
- switching from nextJS to django. why:
  - user accounts already present
  - DB already present
  - want to use Python since I'm already using it for uni.
- ~~when backend is implemented, I'll add the code for running the server here~~
- ~~run `cd elliot-frontend`~~
- ~~then `npm run dev`~~

## to-do list

- ✅figure out DB structure [see the .xd file]
- ✅design the architecture: design and separate the shadcn components:
  - text view:
    - card
      - title
      - description
  - text input:
    - card
      - title
      - input
  - title:
    - date num, 
    - month,
    - year / last year 
    - other (future) links e.g., edit, upload image, record audio, tags, links, etc
- ✅figure out a mobile layout before we proceed.
  - for the journal entry page
  - for the naviagtion page
- ▶️setup django. watch tutorial to learn the general flow.
- figure out the order of what to set up next (pages, DB, users, dummy data, etc) 
- setup shadcn for sample CRUD homepage [eventually landing page will be the calendar view]
- ✅finish parser - working as HTML page with an imported JS parser currently. moved to archive.
- ✅migrate to ~~React Vite (with TS?)~~ to ~~NextJS~~ to Django!
- must be a PWA !important

## architecture

- frontend
  - UI
  - pages [home, entry, calendar, profile, parser]
- backend
  - get entry[ies]
  - post entry
  - put entry
  - delete entry

## log

Oct 2025:
- set up the project afresh with frontend running on NextJS.
- created a folder for backend - will add express / sqlite later.
- probably going to hide the old code in an archives folder.
- switching to Django

Aug:
- decided on NextJS for both front and backend
- started UI/UX mockups for home, entry, and calendar in XD
