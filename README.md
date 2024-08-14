**Nextjs Application with Docker**

---

**nextjs project setup (bash & npm):**

1. `npx create-next-app@latest <project_name>` #initialize the project
2. `npm install`
3. `npm run dev`

nextjs docs: [https://nextjs.org/docs/app/getting-started/installation](https://nextjs.org/docs/app/getting-started/installation)

#create 3 files named Dockerfile .dockerignore docker-compose.yml

4. `touch Dockerfile .dockerignore docker-compose.yml`
5. `docker compose build`
6. `docker compose up`
7. docker tag `<source-image>`:`<source-tag>` `<dockerhub-username><target-image>`:`<target-tag>`

   - example: `docker tag dn_img1/dockerized-nextjs:latest navish123/dockerized-nextjs:latest`

8. `docker push <dockerhub-username><target-image>:<target-tag>`

   - example: `docker push navish123/dockerized-nextjs:latest`

9. `docker run -p 3000:3000 navish123/dockerized-nextjs:latest`

   #use the image by following the format

   - `docker run -p port_no:port_no <dockerhub-username><target-image>:<target-tag>`

**Github repository link:** [nextjs-dockerized github repo link](https://github.com/Navishh/nextjs-dockerized)

**Medium link:** [https://medium.com/@itsuki.enjoy/dockerize-a-next-js-app-4b03021e084d](https://medium.com/@itsuki.enjoy/dockerize-a-next-js-app-4b03021e084d)

**Livecycle link:** [livecycle link](https://livecycle.io/)
