#!/bin/bash
set -x
if [ ! -f "public/watches/tissot-prx-titanium-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-titanium-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX Titanium 38mm..."
    mkdir -p "public/watches/tissot-prx-titanium-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw699e42ba/product-pictures/bb1339fa-d3fd-4572-a568-9ab0c2cbf248_T137-807-44-061-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-titanium-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-le-locle-39-3mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-le-locle-39-3mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Le Locle 39.3mm..."
    mkdir -p "public/watches/tissot-le-locle-39-3mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw01251955/product-pictures/4ba6f43d-779c-4569-b5b8-697d41c985cd_T006-407-16-053-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-le-locle-39-3mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-classic-dream-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-classic-dream-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Classic Dream 40mm..."
    mkdir -p "public/watches/tissot-classic-dream-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc6476d97/product-pictures/03fcc26f-3aff-4aef-bdef-df8c850de092_T158-407-11-051-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-classic-dream-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-ballade-39mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-ballade-39mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Ballade 39mm..."
    mkdir -p "public/watches/tissot-ballade-39mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw28b7707e/product-pictures/08a991c0-bd77-4aac-a83a-bdfdd6cf55c9_T156-408-11-033-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-ballade-39mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-damascus-steel-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-damascus-steel-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX Damascus Steel 38mm..."
    mkdir -p "public/watches/tissot-prx-damascus-steel-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw6af42289/product-pictures/2595b61a-d8db-414a-9356-51c9350e537b_T137-807-96-081-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-damascus-steel-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr-100-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr-100-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR 100 40mm..."
    mkdir -p "public/watches/tissot-pr-100-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw785da7ae/product-pictures/fd693943-a988-4cef-8e8e-08b4ce48c8b2_T150-417-11-041-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr-100-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX 40mm..."
    mkdir -p "public/watches/tissot-prx-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8ddb8341/product-pictures/daab9283-862f-4732-abd0-fa955e11d7bd_T137-407-33-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr516-41mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr516-41mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR516 41mm..."
    mkdir -p "public/watches/tissot-pr516-41mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw9f7c8fc3/product-pictures/8c117916-a7db-4ec1-8a21-006068f33c4b_T149-462-11-011-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr516-41mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-classic-dream-42mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-classic-dream-42mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Classic Dream 42mm..."
    mkdir -p "public/watches/tissot-classic-dream-42mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw86ae9818/product-pictures/1d2813bb-043b-46e0-b714-fd2eb76ddeec_T129-410-16-013-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-classic-dream-42mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-ballade-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-ballade-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Ballade 40mm..."
    mkdir -p "public/watches/tissot-ballade-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw81f4ee7b/product-pictures/25ed1f20-4c24-43c2-a9ac-93b20056021c_T156-410-11-091-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-ballade-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-chrono-xl-vintage-45mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-chrono-xl-vintage-45mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Chrono XL Vintage 45mm..."
    mkdir -p "public/watches/tissot-chrono-xl-vintage-45mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2944b40d/product-pictures/5de7724a-cbe9-49d1-98fe-0574763633e1_T116-617-16-042-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-chrono-xl-vintage-45mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-chemin-des-tourelles-skeleton-39mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-chemin-des-tourelles-skeleton-39mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Chemin Des Tourelles Skeleton 39mm..."
    mkdir -p "public/watches/tissot-chemin-des-tourelles-skeleton-39mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwbc1c222d/product-pictures/c9b3eacb-ef18-4c0b-827b-19b4589d4df7_T139-836-36-441-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-chemin-des-tourelles-skeleton-39mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-45-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-45-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 45.5mm..."
    mkdir -p "public/watches/tissot-seastar-1000-45-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2eed2b50/product-pictures/560259c8-0395-451b-9033-d8062e7f1950_T120-417-17-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-45-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-wilson-wnba-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-wilson-wnba-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar Wilson WNBA 40mm..."
    mkdir -p "public/watches/tissot-seastar-wilson-wnba-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw3cefaf93/product-pictures/1dccd07a-4269-444c-a9bd-f4230d8ee34d_T120-807-17-051-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-wilson-wnba-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-35mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-35mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX 35mm..."
    mkdir -p "public/watches/tissot-prx-35mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5ab05c59/product-pictures/a2c83d75-5920-46ae-9357-748382f43010_T137-207-11-091-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-35mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-gmt-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-gmt-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 GMT 40mm..."
    mkdir -p "public/watches/tissot-seastar-1000-gmt-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw1db0de4e/product-pictures/f666c11b-ad09-4f4a-a411-fe9e912bd26a_T120-852-17-051-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-gmt-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-race-45mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-race-45mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Race 45mm..."
    mkdir -p "public/watches/tissot-t-race-45mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7e34f1ea/product-pictures/6c3aa701-8c59-45ee-b561-1d9b42e81088_T141-417-37-061-01_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-race-45mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prc-200-43mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prc-200-43mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRC 200 43mm..."
    mkdir -p "public/watches/tissot-prc-200-43mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw3f7ea377/product-pictures/39610dce-8d55-405d-b193-93bb63b38666_T114-417-11-047-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prc-200-43mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-43mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-43mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 43mm..."
    mkdir -p "public/watches/tissot-seastar-1000-43mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb49a98d7/product-pictures/6c496218-ef8f-4626-8f99-3e5c481d8c02_T120-407-11-051-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-43mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-touch-connect-sport-43-75mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-touch-connect-sport-43-75mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Touch Connect Sport 43.75mm..."
    mkdir -p "public/watches/tissot-t-touch-connect-sport-43-75mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw64fbe077/product-pictures/aba33902-9ad8-48c8-98e3-26b08d27d1e8_T153-420-47-051-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-touch-connect-sport-43-75mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-touch-connect-sport-jungfraubahn-43-75mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-touch-connect-sport-jungfraubahn-43-75mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Touch Connect Sport Jungfraubahn 43.75mm..."
    mkdir -p "public/watches/tissot-t-touch-connect-sport-jungfraubahn-43-75mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2776c492/product-pictures/319bf1cf-23f3-4361-abe9-b905e9e64139_T153-420-47-051-06_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-touch-connect-sport-jungfraubahn-43-75mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-savonnette-49-4mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-savonnette-49-4mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Savonnette 49.4mm..."
    mkdir -p "public/watches/tissot-savonnette-49-4mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2b2717b8/product-pictures/f0c495e9-3964-4dca-bd01-5e58497b7bc4_T83-6-402-12_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-savonnette-49-4mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prc-100-solar-39mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prc-100-solar-39mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRC 100 Solar 39mm..."
    mkdir -p "public/watches/tissot-prc-100-solar-39mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa41f5b93/product-pictures/f894de57-432c-424f-8188-37b08256e66e_T151-422-11-041-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prc-100-solar-39mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-gentleman-open-heart-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-gentleman-open-heart-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Gentleman Open Heart 40mm..."
    mkdir -p "public/watches/tissot-gentleman-open-heart-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa5d2b33f/product-pictures/d82c3b73-ffcb-4720-a219-ae68148eaadb_T127-407-11-041-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-gentleman-open-heart-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr516-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr516-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR516 40mm..."
    mkdir -p "public/watches/tissot-pr516-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwba0123e1/product-pictures/77ccde04-3fdd-4d5b-93b1-8d3463f4cab4_T149-417-22-051-01_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr516-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-supersport-chrono-45-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-supersport-chrono-45-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Supersport Chrono 45.5mm..."
    mkdir -p "public/watches/tissot-supersport-chrono-45-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwb87fe023/product-pictures/541218e5-cbdb-45b4-a869-ba1a7f01e048_T125-617-11-051-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-supersport-chrono-45-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-chrono-xl-classic-45mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-chrono-xl-classic-45mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Chrono XL Classic 45mm..."
    mkdir -p "public/watches/tissot-chrono-xl-classic-45mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw7632cc13/product-pictures/0eb00258-99c1-41f1-97dc-5662074ddbd7_T116-617-36-042-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-chrono-xl-classic-45mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-touch-connect-solar-47-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-touch-connect-solar-47-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Touch Connect Solar 47.5mm..."
    mkdir -p "public/watches/tissot-t-touch-connect-solar-47-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwcb2c513d/product-pictures/a62b5325-862b-4924-8ca8-8fcdae08a984_T121-420-47-051-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-touch-connect-solar-47-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-tradition-42mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-tradition-42mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Tradition 42mm..."
    mkdir -p "public/watches/tissot-tradition-42mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw24bfe0c6/product-pictures/80a5b3c4-cb86-4371-8753-e0abdd3f8e13_T063-610-36-038-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-tradition-42mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 40mm..."
    mkdir -p "public/watches/tissot-seastar-1000-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw8e8976af/product-pictures/cfece5b8-ea04-45a9-aeaf-6199b8c6e622_T120-807-11-051-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-savonnette-48-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-savonnette-48-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Savonnette 48.5mm..."
    mkdir -p "public/watches/tissot-savonnette-48-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw145bf8ff/product-pictures/7527de7e-fb4e-4449-a85d-032bd943d3a2_T862-410-19-042-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-savonnette-48-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr-100-34mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr-100-34mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR 100 34mm..."
    mkdir -p "public/watches/tissot-pr-100-34mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwed56485b/product-pictures/b31dbd03-acdf-46df-afdc-b665f1273cac_T150-210-11-351-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr-100-34mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-gentleman-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-gentleman-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Gentleman 40mm..."
    mkdir -p "public/watches/tissot-gentleman-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc00ccbbb/product-pictures/ac146204-15a2-4b18-82de-6031d0cc9cf1_T127-407-11-091-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-gentleman-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 38mm..."
    mkdir -p "public/watches/tissot-seastar-1000-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwfd11eb5d/product-pictures/ee79c60c-4bdb-400d-ae6f-edb89cbafdc9_T120-217-11-061-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-carson-premium-41mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-carson-premium-41mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Carson Premium 41mm..."
    mkdir -p "public/watches/tissot-carson-premium-41mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw105426eb/product-pictures/b0d9ff29-ab77-4332-8647-cffaa662fe86_T122-417-16-033-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-carson-premium-41mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr516-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr516-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR516 38mm..."
    mkdir -p "public/watches/tissot-pr516-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2ef2e496/product-pictures/6d2829f3-ec56-4d51-9620-c779697f66f3_T149-407-11-051-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr516-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-gentleman-gold-bezel-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-gentleman-gold-bezel-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Gentleman Gold bezel 40mm..."
    mkdir -p "public/watches/tissot-gentleman-gold-bezel-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw5134c2f4/product-pictures/b73fdf5e-7205-41ee-a9db-f8293d64fbb6_T927-407-46-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-gentleman-gold-bezel-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-race-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-race-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Race 38mm..."
    mkdir -p "public/watches/tissot-t-race-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwee0ecfe8/product-pictures/acec9ec7-f3a7-42a4-a27f-d5bbaeca4f6e_T141-817-37-501-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-race-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr-100-jungfraubahn-34mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr-100-jungfraubahn-34mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR 100 Jungfraubahn 34mm..."
    mkdir -p "public/watches/tissot-pr-100-jungfraubahn-34mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw05331503/product-pictures/ed2817e9-7998-4a11-8d2b-02bd60d1300a_T150-210-11-041-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr-100-jungfraubahn-34mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-quartz-chronograph-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-quartz-chronograph-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 Quartz Chronograph 38mm..."
    mkdir -p "public/watches/tissot-seastar-1000-quartz-chronograph-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw27e150ff/product-pictures/7cdff26a-84dc-4817-93e3-e557e752b9bc_T120-217-37-041-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-quartz-chronograph-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr-100-vuelta-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr-100-vuelta-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR 100 Vuelta 40mm..."
    mkdir -p "public/watches/tissot-pr-100-vuelta-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw1da8957a/product-pictures/6a79c320-ade3-4f4f-8cac-1b957934bd30_T150-417-11-051-01_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr-100-vuelta-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-heritage-1938-39mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-heritage-1938-39mm/main.jpg") -lt 1000 ]; then
    echo "Retrying HERITAGE 1938 39mm..."
    mkdir -p "public/watches/tissot-heritage-1938-39mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwccbe84a6/product-pictures/4f1a7e29-5e45-45e5-8871-6d1fdfa183f2_T142-464-16-032-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-heritage-1938-39mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-ufo-robot-grendizer-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-ufo-robot-grendizer-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX UFO Robot Grendizer 40mm..."
    mkdir -p "public/watches/tissot-prx-ufo-robot-grendizer-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw2e27ccbc/product-pictures/1640b44b-7c54-4c7a-878d-747000e92c3f_T137-407-11-041-02_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-ufo-robot-grendizer-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-le-locle-gold-39-3mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-le-locle-gold-39-3mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Le Locle Gold 39.3mm..."
    mkdir -p "public/watches/tissot-le-locle-gold-39-3mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa0888008/product-pictures/1226651d-39f8-41a6-97bc-39356500f7fc_T932-408-41-033-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-le-locle-gold-39-3mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-36mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-36mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 36mm..."
    mkdir -p "public/watches/tissot-seastar-1000-36mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw22db0a04/product-pictures/28c2842d-418c-4deb-878f-a8d5d1eb2280_T120-210-11-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-36mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-2000-46mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-2000-46mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 2000 46mm..."
    mkdir -p "public/watches/tissot-seastar-2000-46mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwa66261d0/product-pictures/1efadd19-0423-46a3-9b72-11e00423105f_T120-607-11-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-2000-46mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-le-locle-open-heart-39-3mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-le-locle-open-heart-39-3mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Le Locle Open Heart 39.3mm..."
    mkdir -p "public/watches/tissot-le-locle-open-heart-39-3mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw4f23d883/product-pictures/45f68220-5164-45bd-862a-20d5f845f9ab_T006-407-16-033-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-le-locle-open-heart-39-3mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-telemeter-1938-42mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-telemeter-1938-42mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Telemeter 1938 42mm..."
    mkdir -p "public/watches/tissot-telemeter-1938-42mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw98d6c370/product-pictures/6ccbfac7-9048-4b63-ae0e-6bcedf2eda6e_T142-462-16-052-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-telemeter-1938-42mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-race-41mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-race-41mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Race 41mm..."
    mkdir -p "public/watches/tissot-t-race-41mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw27fd302c/product-pictures/8cfceda4-edc5-413c-a8a7-08c0fea0b436_T141-807-17-051-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-race-41mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-lepine-49mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-lepine-49mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Lepine 49mm..."
    mkdir -p "public/watches/tissot-lepine-49mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwddd32e63/product-pictures/60c9f54d-3677-4743-a151-43f5276e2de1_T82-6-550-13_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-lepine-49mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-chrono-xl-classic/main.jpg" ] || [ $(wc -c < "public/watches/tissot-chrono-xl-classic/main.jpg") -lt 1000 ]; then
    echo "Retrying Chrono XL Classic..."
    mkdir -p "public/watches/tissot-chrono-xl-classic"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw26edfed5/product-pictures/2d829943-5689-4f62-acb2-fc288ccd2434_T116-617-11-037-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-chrono-xl-classic/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-42mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-42mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX 42mm..."
    mkdir -p "public/watches/tissot-prx-42mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc13f02b5/product-pictures/3b60a002-2031-4a8b-802e-a63a3a936a51_T137-427-11-011-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-42mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-gold-35mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-gold-35mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX Gold 35mm..."
    mkdir -p "public/watches/tissot-prx-gold-35mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw359bf4e5/product-pictures/a81ec0d2-6680-4047-9aa9-f9245a354367_T931-207-41-031-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-gold-35mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-complication-squelette-43mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-complication-squelette-43mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Complication Squelette 43mm..."
    mkdir -p "public/watches/tissot-t-complication-squelette-43mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw224f6a40/product-pictures/90c5480b-83f5-468e-8712-6fa68059c1b7_T070-405-16-411-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-complication-squelette-43mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prc-100-solar-34mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prc-100-solar-34mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRC 100 Solar 34mm..."
    mkdir -p "public/watches/tissot-prc-100-solar-34mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw47c1f353/product-pictures/6ac0a302-b2f3-4bf2-bf36-d1c99a51f853_T151-822-22-031-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prc-100-solar-34mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-gold-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-gold-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX Gold 40mm..."
    mkdir -p "public/watches/tissot-prx-gold-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwe9f97770/product-pictures/95903b59-195e-4472-98e3-5812f8fca761_T931-407-41-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-gold-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-chemin-des-tourelles-42mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-chemin-des-tourelles-42mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Chemin des Tourelles 42mm..."
    mkdir -p "public/watches/tissot-chemin-des-tourelles-42mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc8e7b6c3/product-pictures/c3273ab0-c8c4-4602-a7cf-ebd5f2d9ca33_T139-407-16-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-chemin-des-tourelles-42mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-goldrun-gold-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-goldrun-gold-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Goldrun Gold 38mm..."
    mkdir -p "public/watches/tissot-goldrun-gold-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwc1b1f120/product-pictures/2de936a6-1e7f-4463-aa81-75442216f479_T922-410-16-011-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-goldrun-gold-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pendants-30-1mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pendants-30-1mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Pendants 30.1mm..."
    mkdir -p "public/watches/tissot-pendants-30-1mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw85f2dd3a/product-pictures/aa90307f-3128-40f7-a895-d6ca47702059_T81-7-221-12_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pendants-30-1mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-goldrun-hesalite-gold-33-7mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-goldrun-hesalite-gold-33-7mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Goldrun Hesalite Gold 33.7mm..."
    mkdir -p "public/watches/tissot-goldrun-hesalite-gold-33-7mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwd1749e15/product-pictures/066adf13-039f-4ab7-abfe-1b5aa18da4e2_T71-3-401-21_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-goldrun-hesalite-gold-33-7mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-le-locle-gold-39mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-le-locle-gold-39mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Le Locle Gold 39mm..."
    mkdir -p "public/watches/tissot-le-locle-gold-39mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwecb8830a/product-pictures/8f6ca206-c41c-4b8e-906f-1ffa41611c22_T932-408-46-043-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-le-locle-gold-39mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-infirmi-egrave-res/main.jpg" ] || [ $(wc -c < "public/watches/tissot-infirmi-egrave-res/main.jpg") -lt 1000 ]; then
    echo "Retrying Infirmi&egrave;res..."
    mkdir -p "public/watches/tissot-infirmi-egrave-res"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw4a8e668e/product-pictures/6999d27f-fabd-4de7-bcaf-ed0e69242954_T81-7-223-92_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-infirmi-egrave-res/main.jpg"
fi
if [ ! -f "public/watches/tissot-classic-dream-swissmatic/main.jpg" ] || [ $(wc -c < "public/watches/tissot-classic-dream-swissmatic/main.jpg") -lt 1000 ]; then
    echo "Retrying Classic Dream Swissmatic..."
    mkdir -p "public/watches/tissot-classic-dream-swissmatic"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw11d2bcdc/product-pictures/777b9cb8-ca72-4e1f-85b6-fb5df334c26e_T129-407-11-031-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-classic-dream-swissmatic/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-powermatic-80-gmt/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-powermatic-80-gmt/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 Powermatic 80 GMT..."
    mkdir -p "public/watches/tissot-seastar-1000-powermatic-80-gmt"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw91637088/product-pictures/b1ab59b7-47b6-43d6-b5a9-06120c12bf5d_T120-429-11-051-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-powermatic-80-gmt/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-ufo-robot-grendizer-50th-anniversary-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-ufo-robot-grendizer-50th-anniversary-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX UFO Robot Grendizer 50th Anniversary 40mm..."
    mkdir -p "public/watches/tissot-prx-ufo-robot-grendizer-50th-anniversary-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwe931905e/product-pictures/2672bb1a-58ec-4ca0-aa4f-1b299fc802b2_T137-407-33-051-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-ufo-robot-grendizer-50th-anniversary-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-heritage-1973/main.jpg" ] || [ $(wc -c < "public/watches/tissot-heritage-1973/main.jpg") -lt 1000 ]; then
    echo "Retrying Heritage 1973..."
    mkdir -p "public/watches/tissot-heritage-1973"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwfe85ac0c/product-pictures/20fea027-bc85-465e-b206-69e0804c8955_T124-427-16-031-01_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-heritage-1973/main.jpg"
fi
if [ ! -f "public/watches/tissot-t-touch-connect-solar-jungfraubahn-47-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-t-touch-connect-solar-jungfraubahn-47-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying T-Touch Connect Solar Jungfraubahn 47.5mm..."
    mkdir -p "public/watches/tissot-t-touch-connect-solar-jungfraubahn-47-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw63a6e7df/product-pictures/b7ae5add-d31b-4ac0-aff1-705a26613981_T121-420-47-051-05_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-t-touch-connect-solar-jungfraubahn-47-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-rockwatch-38mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-rockwatch-38mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Rockwatch 38mm..."
    mkdir -p "public/watches/tissot-rockwatch-38mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw495beb78/product-pictures/d32bf492-906e-48bf-903a-d76f89649a07_T147-409-96-510-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-rockwatch-38mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-le-locle-20th-anniversary-39-3mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-le-locle-20th-anniversary-39-3mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Le Locle 20th Anniversary 39.3mm..."
    mkdir -p "public/watches/tissot-le-locle-20th-anniversary-39-3mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwd5f3c032/product-pictures/081f190e-c331-497b-9d9d-3bcbdd48aee4_T006-407-11-033-03_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-le-locle-20th-anniversary-39-3mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr-100-41mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr-100-41mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR 100 41mm..."
    mkdir -p "public/watches/tissot-pr-100-41mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwdaf00fbb/product-pictures/5d4cf7b8-91e0-42bc-8d59-7d270e794890_T101-417-23-061-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr-100-41mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-savonnette-49-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-savonnette-49-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Savonnette 49.5mm..."
    mkdir -p "public/watches/tissot-savonnette-49-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw22223aba/product-pictures/84738ca3-a0fe-4fb8-bdb1-c4d53971f89b_T862-410-29-013-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-savonnette-49-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-carbon-40-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-carbon-40-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX Carbon 40.5mm..."
    mkdir -p "public/watches/tissot-prx-carbon-40-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw627b1daa/product-pictures/ee3811c6-6d9e-44e1-889f-b0e6182bbc36_T137-907-97-201-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-carbon-40-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-pr-100-jungfraubahn-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-pr-100-jungfraubahn-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PR 100 Jungfraubahn 40mm..."
    mkdir -p "public/watches/tissot-pr-100-jungfraubahn-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dweebfa1e0/product-pictures/cdaeacce-40a6-4c83-934c-015cad2c73ce_T150-410-11-041-02_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-pr-100-jungfraubahn-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-everytime-34mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-everytime-34mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Everytime 34mm..."
    mkdir -p "public/watches/tissot-everytime-34mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw187b041c/product-pictures/4c2172f7-9197-4f91-8cae-5c44beebe458_T143-210-11-041-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-everytime-34mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-prx-damian-lillard-special-edition-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-prx-damian-lillard-special-edition-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying PRX Damian Lillard Special Edition 40mm..."
    mkdir -p "public/watches/tissot-prx-damian-lillard-special-edition-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwf4dd9736/product-pictures/a56e8842-e93e-482a-b6bb-fb5dc223c496_T137-407-33-051-00_Shadow-png.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-prx-damian-lillard-special-edition-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-supersport-nba-special-edition-45-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-supersport-nba-special-edition-45-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Supersport NBA Special Edition 45.5mm..."
    mkdir -p "public/watches/tissot-supersport-nba-special-edition-45-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw34f6a1d1/product-pictures/280924a1-358f-4f8b-ae0d-6124ebbf2cde_T125-617-37-067-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-supersport-nba-special-edition-45-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-savonnette-49-55mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-savonnette-49-55mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Savonnette 49.55mm..."
    mkdir -p "public/watches/tissot-savonnette-49-55mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw18f893d3/product-pictures/12d60722-a8a4-4e40-8be4-4d0ed15c5870_T83-6-401-13_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-savonnette-49-55mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-carson-premium-40mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-carson-premium-40mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Carson Premium 40mm..."
    mkdir -p "public/watches/tissot-carson-premium-40mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw9bf4fbf2/product-pictures/b86103e9-fa72-47f3-91ee-94c19a05b33e_T122-423-11-033-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-carson-premium-40mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-supersport-chrono-basketball-edition-45-5mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-supersport-chrono-basketball-edition-45-5mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Supersport Chrono Basketball Edition 45.5mm..."
    mkdir -p "public/watches/tissot-supersport-chrono-basketball-edition-45-5mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dw6539449a/product-pictures/285e5c54-9dfd-4078-b41a-13359ca57f6c_T125-617-36-081-00_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-supersport-chrono-basketball-edition-45-5mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-le-locle-39mm/main.jpg" ] || [ $(wc -c < "public/watches/tissot-le-locle-39mm/main.jpg") -lt 1000 ]; then
    echo "Retrying Le Locle 39mm..."
    mkdir -p "public/watches/tissot-le-locle-39mm"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwe60e0f69/product-pictures/73167f42-2e17-4af3-9b5a-de038b65ae6d_T006-407-16-043-00_Shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-le-locle-39mm/main.jpg"
fi
if [ ! -f "public/watches/tissot-seastar-1000-chronograph/main.jpg" ] || [ $(wc -c < "public/watches/tissot-seastar-1000-chronograph/main.jpg") -lt 1000 ]; then
    echo "Retrying Seastar 1000 Chronograph..."
    mkdir -p "public/watches/tissot-seastar-1000-chronograph"
    curl -s -L -A "Mozilla/5.0" "https://www.tissotwatches.com/dw/image/v2/BKKD_PRD/on/demandware.static/-/Sites-Tissot-Catalogue/default/dwd0954abe/product-pictures/f0d41e1d-1ec0-4396-b274-972a31890a97_T120-417-17-051-03_shadow.png?sm=fit&sw=800&sh=800,gravity=center" -o "public/watches/tissot-seastar-1000-chronograph/main.jpg"
fi
