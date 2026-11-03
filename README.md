# DplayerTv

Aplicativo reprodutor de mídia para Android, Android TV e TV Boxes, com estratégia de adaptação futura para Samsung Tizen e LG webOS.

## Identidade e experiência
- Interface preta, ícones e destaques azuis, textos brancos.
- Tela inicial com TV ao vivo, Filmes, Séries e Configurações.
- Navegação preparada para evolução com controle remoto.
- Projeto independente, sem dependências ou credenciais do SincMensy.

## Fontes de conteúdo planejadas
- Xtream Codes: servidor, usuário e senha.
- URL M3U/M3U8.
- Importação de arquivo M3U.
- Uso apenas de listas e conteúdos que o usuário tenha autorização para acessar.

## Funcionalidades planejadas
- Catálogo de canais, filmes e séries conforme os metadados fornecidos.
- Favoritos e histórico separados por lista.
- Múltiplas listas, troca de lista e armazenamento local.
- Reprodução com controles, áudio e legendas quando suportados pela fonte e plataforma.
- Persistência da sessão e atualização periódica do catálogo.

## Stack inicial
- Expo / React Native
- Expo Router
- TypeScript
- Identificador Android: com.dplayertv.app

## Estado atual
Fundação inicial criada: configuração Expo, tema visual e telas-base de início, TV ao vivo, filmes, séries, configurações e cadastro de lista. As conexões reais, persistência, catálogo e reprodução ainda serão implementados e testados.

## Estrutura do projeto
```
app/                  Rotas do Expo Router (arquivos finos, só apontam para uma tela)
src/
  screens/            Telas completas (Start [login ou menu], Home, Catalog, Connect, Lists, Account, SeriesDetail, Player, Settings)
  components/         Componentes reutilizáveis (SectionScreen, LoginForm, BrandHeader)
  services/           Regras de negócio (catalog, addPlaylist, playlistValidation)
  api/                Comunicação com servidores externos (xtream)
  parsers/            Leitura de formatos (m3u)
  storage/            Persistência local (playlists + senha segura, favoritos, cache do catálogo)
  types/              Tipos TypeScript compartilhados
  theme.ts            Cores
```
Fluxo de dependência: `app` → `screens` → `services` → `api` / `parsers` / `storage` → `types`.

## Gerar o APK para instalar no celular/TV
O APK de **debug** (`expo run:android` comum) não leva o código JavaScript dentro dele e tenta buscar o Metro no computador, o que causa o erro "Unable to load script". Para instalar de forma independente use um build **release**:

```bash
npx expo prebuild --clean --platform android   # regenera a pasta android (aplica plugins)
npm run android:release                        # compila em release e instala no aparelho conectado
```
O APK fica em `android/app/build/outputs/apk/release/app-release.apk`.

Sem Android Studio instalado, use o EAS (gratuito): `npm i -g eas-cli`, `eas login` e `eas build -p android --profile preview`.

## Desenvolvimento
```bash
npm install
npx expo start
```
