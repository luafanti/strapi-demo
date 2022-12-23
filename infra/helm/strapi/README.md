## Parameters

### Global parameters

| Name                      | Description                                     | Value |
| ------------------------- | ----------------------------------------------- | ----- |
| `global.imageRegistry`    | Global Docker image registry                    | `""`  |
| `global.imagePullSecrets` | Global Docker registry secret names as an array | `[]`  |
| `global.storageClass`     | Global StorageClass for Persistent Volume(s)    | `""`  |


### Common parameters

| Name                     | Description                                                                             | Value           |
| ------------------------ | --------------------------------------------------------------------------------------- | --------------- |
| `kubeVersion`            | Override Kubernetes version                                                             | `""`            |
| `nameOverride`           | String to partially override common.names.fullname                                      | `""`            |
| `fullnameOverride`       | String to fully override common.names.fullname                                          | `""`            |
| `commonLabels`           | Labels to add to all deployed objects                                                   | `{}`            |
| `commonAnnotations`      | Annotations to add to all deployed objects                                              | `{}`            |
| `clusterDomain`          | Kubernetes cluster domain name                                                          | `cluster.local` |
| `extraDeploy`            | Array of extra objects to deploy with the release                                       | `[]`            |
| `diagnosticMode.enabled` | Enable diagnostic mode (all probes will be disabled and the command will be overridden) | `false`         |
| `diagnosticMode.command` | Command to override all containers in the deployment                                    | `["sleep"]`     |
| `diagnosticMode.args`    | Args to override all containers in the deployment                                       | `["infinity"]`  |


### Strapi Image Parameters

| Name                | Description                                       | Value                  |
| ------------------- | ------------------------------------------------- | ---------------------- |
| `image.registry`    | Strapi image registry                             | `ghcr.io`              |
| `image.repository`  | Strapi image repository                           | `luafanti/strapi-demo` |
| `image.digest`      | Strapi image digest                               | `""`                   |
| `image.tag`         | Strapi image tag (immutable tags are recommended) | `main`                 |
| `image.pullPolicy`  | Strapi image pull policy                          | `IfNotPresent`         |
| `image.pullSecrets` | Strapi image pull secrets                         | `[]`                   |
| `image.debug`       | Enable Strapi image debug mode                    | `false`                |


### Strapi Configuration parameters




### Database Parameters

| Name                                          | Description                                                                                                 | Value                      |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | -------------------------- |
| `postgresql.enabled`                          | Deploy a PostgreSQL server to satisfy the applications database requirements                                | `false`                    |
| `postgresql.architecture`                     | PostgreSQL architecture. Allowed values: `standalone` or `replication`                                      | `standalone`               |
| `postgresql.auth.postgresPassword`            | PostgreSQL "postgres" admin user password                                                                   | `""`                       |
| `postgresql.auth.database`                    | PostgreSQL custom database                                                                                  | `strapi`                   |
| `postgresql.auth.username`                    | PostgreSQL custom user name                                                                                 | `postgres`                 |
| `postgresql.auth.password`                    | PostgreSQL custom user password                                                                             | `""`                       |
| `postgresql.auth.existingSecret`              | Existing secret with PostgreSQL credentials                                                                 | `""`                       |
| `postgresql.primary.persistence.enabled`      | Enable persistence on PostgreSQL using PVC(s)                                                               | `true`                     |
| `postgresql.primary.persistence.storageClass` | Persistent Volume storage class                                                                             | `""`                       |
| `postgresql.primary.persistence.accessModes`  | Persistent Volume access modes                                                                              | `[]`                       |
| `postgresql.primary.persistence.size`         | Persistent Volume size                                                                                      | `8Gi`                      |
| `externalDatabase.host`                       | External Database server host                                                                               | `postgresql.cluster.local` |
| `externalDatabase.port`                       | External Database server port                                                                               | `5432`                     |
| `externalDatabase.user`                       | External Database username                                                                                  | `strapi`                   |
| `externalDatabase.password`                   | External Database user password                                                                             | `""`                       |
| `externalDatabase.database`                   | External Database database name                                                                             | `strapi`                   |
| `externalDatabase.options`                    | External Database database options                                                                          | `""`                       |
| `externalDatabase.existingSecret`             | The name of an existing secret with database credentials                                                    | `""`                       |
| `keys.apiKeys`                                | Session keys used by the session middleware for the Users & Permissions plugin and the Documentation plugin | `nil`                      |
| `keys.apiTokenSalt`                           | Salt used to generate API tokens                                                                            | `nil`                      |
| `keys.adminJwtSecret`                         | Secret used to encode admin JWT tokens                                                                      | `nil`                      |
| `keys.jwtSecret`                              | Secret used to encode JWT tokens                                                                            | `nil`                      |
| `storage.provider`                            | Storage provider for images and videos. Allowed values: `local`, `aws-s3`                                   | `local`                    |
| `storage.aws.bucket`                          | S3 bucket name                                                                                              | `nil`                      |
| `storage.aws.accessKey`                       | IAM user access key                                                                                         | `nil`                      |
| `storage.aws.secretKey`                       | IAM user secret key                                                                                         | `nil`                      |
| `storage.aws.region`                          | AWS S3 bucket region                                                                                        | `nil`                      |


### Deployment Parameters

| Name                                    | Description                                                                               | Value                 |
| --------------------------------------- | ----------------------------------------------------------------------------------------- | --------------------- |
| `replicaCount`                          | Number of Strapi replicas to deploy                                                       | `1`                   |
| `containerPorts.http`                   | Strapi HTTP container port                                                                | `1337`                |
| `livenessProbe.enabled`                 | Enable livenessProbe on Strapi containers                                                 | `true`                |
| `livenessProbe.initialDelaySeconds`     | Initial delay seconds for livenessProbe                                                   | `60`                  |
| `livenessProbe.periodSeconds`           | Period seconds for livenessProbe                                                          | `10`                  |
| `livenessProbe.timeoutSeconds`          | Timeout seconds for livenessProbe                                                         | `5`                   |
| `livenessProbe.failureThreshold`        | Failure threshold for livenessProbe                                                       | `6`                   |
| `livenessProbe.successThreshold`        | Success threshold for livenessProbe                                                       | `1`                   |
| `readinessProbe.enabled`                | Enable readinessProbe on Strapi containers                                                | `true`                |
| `readinessProbe.initialDelaySeconds`    | Initial delay seconds for readinessProbe                                                  | `30`                  |
| `readinessProbe.periodSeconds`          | Period seconds for readinessProbe                                                         | `5`                   |
| `readinessProbe.timeoutSeconds`         | Timeout seconds for readinessProbe                                                        | `3`                   |
| `readinessProbe.failureThreshold`       | Failure threshold for readinessProbe                                                      | `6`                   |
| `readinessProbe.successThreshold`       | Success threshold for readinessProbe                                                      | `1`                   |
| `startupProbe.enabled`                  | Enable startupProbe on Strapi containers                                                  | `false`               |
| `startupProbe.initialDelaySeconds`      | Initial delay seconds for startupProbe                                                    | `120`                 |
| `startupProbe.periodSeconds`            | Period seconds for startupProbe                                                           | `10`                  |
| `startupProbe.timeoutSeconds`           | Timeout seconds for startupProbe                                                          | `5`                   |
| `startupProbe.failureThreshold`         | Failure threshold for startupProbe                                                        | `6`                   |
| `startupProbe.successThreshold`         | Success threshold for startupProbe                                                        | `1`                   |
| `customLivenessProbe`                   | Custom livenessProbe that overrides the default one                                       | `{}`                  |
| `customReadinessProbe`                  | Custom readinessProbe that overrides the default one                                      | `{}`                  |
| `customStartupProbe`                    | Custom startupProbe that overrides the default one                                        | `{}`                  |
| `resources.requests.cpu`                | The requested CPU resource for the Strapi containers                                      | `250m`                |
| `resources.requests.memory`             | The requested RAM resource for the Strapi containers                                      | `256Mi`               |
| `resources.limits.cpu`                  | The CPU resource limits for the Strapi containers                                         | `1000m`               |
| `resources.limits.memory`               | The RAM resource limits for the Strapi containers                                         | `1024Mi`              |
| `podSecurityContext.enabled`            | Enabled Strapi pods' Security Context                                                     | `true`                |
| `podSecurityContext.fsGroup`            | Set Strapi pod's Security Context fsGroup                                                 | `1001`                |
| `containerSecurityContext.enabled`      | Enabled Strapi containers' Security Context                                               | `true`                |
| `containerSecurityContext.runAsUser`    | Set Strapi containers' Security Context runAsUser                                         | `1001`                |
| `containerSecurityContext.runAsNonRoot` | Set Strapi containers' Security Context runAsNonRoot                                      | `true`                |
| `existingConfigmap`                     | The name of an existing ConfigMap with your custom configuration for Strapi               | `nil`                 |
| `command`                               | Override default container command (useful when using custom images)                      | `[]`                  |
| `args`                                  | Override default container args (useful when using custom images)                         | `[]`                  |
| `hostAliases`                           | Strapi pods host aliases                                                                  | `[]`                  |
| `podLabels`                             | Extra labels for Strapi pods                                                              | `{}`                  |
| `podAnnotations`                        | Annotations for Strapi pods                                                               | `{}`                  |
| `podAffinityPreset`                     | Pod affinity preset. Ignored if `affinity` is set. Allowed values: `soft` or `hard`       | `""`                  |
| `podAntiAffinityPreset`                 | Pod anti-affinity preset. Ignored if `affinity` is set. Allowed values: `soft` or `hard`  | `soft`                |
| `nodeAffinityPreset.type`               | Node affinity preset type. Ignored if `affinity` is set. Allowed values: `soft` or `hard` | `""`                  |
| `nodeAffinityPreset.key`                | Node label key to match. Ignored if `affinity` is set                                     | `""`                  |
| `nodeAffinityPreset.values`             | Node label values to match. Ignored if `affinity` is set                                  | `[]`                  |
| `affinity`                              | Affinity for Strapi pods assignment                                                       | `{}`                  |
| `nodeSelector`                          | Node labels for Strapi pods assignment                                                    | `{}`                  |
| `tolerations`                           | Tolerations for Strapi pods assignment                                                    | `[]`                  |
| `updateStrategy.type`                   | Strapi update strategy type                                                               | `RollingUpdate`       |
| `updateStrategy.rollingUpdate`          | Strapi rolling update strategy parameters                                                 | `{}`                  |
| `priorityClassName`                     | Strapi pods' priorityClassName                                                            | `""`                  |
| `schedulerName`                         | Name of the k8s scheduler (other than default) for Strapi pods                            | `""`                  |
| `lifecycleHooks`                        | for the Strapi container(s) to automate configuration before or after startup             | `{}`                  |
| `extraEnvVars`                          | Array with extra environment variables to add to Strapi nodes                             | `[]`                  |
| `extraEnvVarsCM`                        | Name of existing ConfigMap containing extra env vars for Strapi nodes                     | `nil`                 |
| `extraEnvVarsSecret`                    | Name of existing Secret containing extra env vars for Strapi nodes                        | `nil`                 |
| `extraVolumes`                          | Optionally specify extra list of additional volumes for the Strapi pod(s)                 | `[]`                  |
| `extraVolumeMounts`                     | Optionally specify extra list of additional volumeMounts for the Strapi container(s)      | `[]`                  |
| `sidecars`                              | Add additional sidecar containers to the Strapi pod(s)                                    | `{}`                  |
| `initContainers`                        | Add additional init containers to the Strapi pod(s)                                       | `{}`                  |
| `autoscaling.enabled`                   | Deploy a HorizontalPodAutoscaler object for the Strapi deployment                         | `false`               |
| `autoscaling.apiVersion`                | API Version of the HPA object (for compatibility with Openshift)                          | `autoscaling/v2beta1` |
| `autoscaling.minReplicas`               | Minimum number of replicas to scale back                                                  | `1`                   |
| `autoscaling.maxReplicas`               | Maximum number of replicas to scale out                                                   | `3`                   |
| `autoscaling.metrics`                   | Metrics to use when deciding to scale the deployment (evaluated as a template)            | `[]`                  |
| `pdb.create`                            | Deploy a PodDisruptionBudget object for Strapi deployment                                 | `false`               |
| `pdb.minAvailable`                      | Minimum available Kong replicas (expressed in percentage)                                 | `""`                  |
| `pdb.maxUnavailable`                    | Maximum unavailable Kong replicas (expressed in percentage)                               | `50%`                 |


### Traffic Exposure Parameters

| Name                               | Description                                                                                                                      | Value                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `service.type`                     | Strapi service type                                                                                                              | `ClusterIP`              |
| `service.ports.http`               | Strapi service HTTP port                                                                                                         | `1337`                   |
| `service.targetPorts.http`         | Strapi service management HTTP port                                                                                              | `1337`                   |
| `service.nodePorts.http`           | Node port for HTTP                                                                                                               | `nil`                    |
| `service.clusterIP`                | Strapi service Cluster IP                                                                                                        | `nil`                    |
| `service.loadBalancerIP`           | Strapi service Load Balancer IP                                                                                                  | `nil`                    |
| `service.loadBalancerSourceRanges` | Strapi service Load Balancer sources                                                                                             | `[]`                     |
| `service.externalTrafficPolicy`    | Strapi service external traffic policy                                                                                           | `Cluster`                |
| `service.annotations`              | Additional custom annotations for Strapi service                                                                                 | `{}`                     |
| `service.extraPorts`               | Extra ports to expose in Strapi service (normally used with the `sidecars` value)                                                | `[]`                     |
| `ingress.enabled`                  | Enable ingress record generation for Gateway                                                                                     | `false`                  |
| `ingress.pathType`                 | Ingress path type                                                                                                                | `ImplementationSpecific` |
| `ingress.apiVersion`               | Force Ingress API version (automatically detected if not set)                                                                    | `nil`                    |
| `ingress.hostname`                 | Default host for the ingress record                                                                                              | `service.local`          |
| `ingress.path`                     | Default path for the ingress record                                                                                              | `/`                      |
| `ingress.annotations`              | Additional annotations for the Ingress resource. To enable certificate autogeneration, place here your cert-manager annotations. | `{}`                     |
| `ingress.tls`                      | Enable TLS configuration for the host defined at `ingress.hostname` parameter                                                    | `false`                  |
| `ingress.selfSigned`               | Create a TLS secret for this ingress record using self-signed certificates generated by Helm                                     | `false`                  |
| `ingress.extraHosts`               | An array with additional hostname(s) to be covered with the ingress record                                                       | `[]`                     |
| `ingress.extraPaths`               | An array with additional arbitrary paths that may need to be added to the ingress under the main host                            | `[]`                     |
| `ingress.extraTls`                 | TLS configuration for additional hostname(s) to be covered with this ingress record                                              | `[]`                     |
| `ingress.secrets`                  | Custom TLS certificates as secrets                                                                                               | `[]`                     |
| `networkPolicy.enabled`            | Enable creation of NetworkPolicy resources                                                                                       | `false`                  |
| `networkPolicy.allowExternal`      | The Policy model to apply                                                                                                        | `true`                   |
| `networkPolicy.additionalRules`    | Additional NetworkPolicy Ingress "from" rules to set. Note that all rules are OR-ed.                                             | `{}`                     |


### Persistence Parameters

| Name                                                   | Description                                                                                     | Value                   |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ----------------------- |
| `persistence.enabled`                                  | Enable persistence using Persistent Volume Claims                                               | `true`                  |
| `persistence.storageClass`                             | Persistent Volume storage class                                                                 | `""`                    |
| `persistence.accessModes`                              | Persistent Volume access modes                                                                  | `[]`                    |
| `persistence.accessMode`                               | Persistent Volume access mode (DEPRECATED: use `persistence.accessModes` instead)               | `ReadWriteOnce`         |
| `persistence.size`                                     | Persistent Volume size                                                                          | `10Gi`                  |
| `persistence.dataSource`                               | Custom PVC data source                                                                          | `{}`                    |
| `persistence.existingClaim`                            | The name of an existing PVC to use for persistence                                              | `""`                    |
| `persistence.selector`                                 | Selector to match an existing Persistent Volume for WordPress data PVC                          | `{}`                    |
| `persistence.annotations`                              | Persistent Volume Claim annotations                                                             | `{}`                    |
| `volumePermissions.enabled`                            | Enable init container that changes the owner/group of the PV mount point to `runAsUser:fsGroup` | `false`                 |
| `volumePermissions.image.registry`                     | Bitnami Shell image registry                                                                    | `docker.io`             |
| `volumePermissions.image.repository`                   | Bitnami Shell image repository                                                                  | `bitnami/bitnami-shell` |
| `volumePermissions.image.tag`                          | Bitnami Shell image tag (immutable tags are recommended)                                        | `11-debian-11-r23`      |
| `volumePermissions.image.pullPolicy`                   | Bitnami Shell image pull policy                                                                 | `IfNotPresent`          |
| `volumePermissions.image.pullSecrets`                  | Bitnami Shell image pull secrets                                                                | `[]`                    |
| `volumePermissions.resources.limits`                   | The resources limits for the init container                                                     | `{}`                    |
| `volumePermissions.resources.requests`                 | The requested resources for the init container                                                  | `{}`                    |
| `volumePermissions.containerSecurityContext.runAsUser` | User ID for the init container                                                                  | `0`                     |


### Init Waiter Parameters

| Name                                         | Description                                                      | Value                     |
| -------------------------------------------- | ---------------------------------------------------------------- | ------------------------- |
| `awaiter.enabled`                            | Use the Awaiter image to wait for dependent services to be ready | `false`                   |
| `awaiter.image.registry`                     | Awaiter image registry                                           | `docker.io`               |
| `awaiter.image.repository`                   | Awaiter image repository                                         | `luafanti/docker-toolbox` |
| `awaiter.image.digest`                       | Awaiter image digest                                             | `""`                      |
| `awaiter.image.tag`                          | Awaiter image tag (immutable tags are recommended)               | `main`                    |
| `awaiter.image.pullPolicy`                   | Awaiter image pull policy                                        | `IfNotPresent`            |
| `awaiter.image.pullSecrets`                  | Awaiter image pull secrets                                       | `[]`                      |
| `awaiter.image.debug`                        | Enable Awaiter image debug mode                                  | `false`                   |
| `awaiter.resources.limits`                   | The resources limits for the init container                      | `{}`                      |
| `awaiter.resources.requests`                 | The requested resources for the init container                   | `{}`                      |
| `awaiter.containerSecurityContext.runAsUser` | Set init container's Security Context runAsUser                  | `0`                       |


### Other Parameters




### RBAC parameters

| Name                         | Description                                            | Value   |
| ---------------------------- | ------------------------------------------------------ | ------- |
| `serviceAccount.create`      | Enable the creation of a ServiceAccount for MySQL pods | `true`  |
| `serviceAccount.name`        | Name of the created ServiceAccount                     | `""`    |
| `serviceAccount.annotations` | Annotations for MySQL Service Account                  | `{}`    |
| `rbac.create`                | Whether to create & use RBAC resources or not          | `false` |

