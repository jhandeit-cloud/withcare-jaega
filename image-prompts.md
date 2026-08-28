# 정다운재가노인복지센터 — 이미지 생성 프롬프트 (앵커 포함)

각 코드블록은 **공통 스타일 앵커가 이미 붙어 있어** 그대로 복사해서 쓰면 됩니다.
Midjourney 기준입니다. Flux / Imagen / SDXL 사용 시 끝의 `--ar ...` · `--style raw`만 지우고 도구에서 비율을 설정하세요.

**작업 순서:** A(히어로)를 먼저 생성 → seed 고정 또는 스타일 참조(`--sref`)로 지정 → 나머지 컷에 물려서 톤 통일.

---

## 공통 스타일 앵커 (참고용 — 아래 프롬프트엔 이미 포함됨)

```
Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home interior: warm oak ondol flooring, low wood furniture, potted plants, framed family photos, a folded quilt, tidy and lived-in. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital ward, ICU, monitors, IV pole, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, holiday decorations, clutter.
```

**고정 인물 표현 (프롬프트마다 동일하게 유지):**

- 요양보호사 — `a 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and warm beige apron with a small name tag, hair tied back`
- 방문간호사 — `a 40-year-old Korean visiting nurse in warm oat-colored scrubs, a small canvas home-care bag beside her`
- 어르신(여) — `an 82-year-old Korean woman with natural silver hair in a low bun, a gentle lined face, in an oatmeal cardigan over a sage floral blouse`
- 어르신(남) — `a 78-year-old Korean man with thin silver hair and glasses, in a warm-brown knit vest over a checked shirt`

> 갤러리에서 **같은 어르신**을 반복 등장시키려면 위 문장을 그대로 두고 `, same woman as before, consistent face` 를 덧붙이세요.

---

## A · 히어로 — 방문 서비스 대표 이미지  (16:9, 좌측 헤드라인 여백)

```
A 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and warm beige apron with a small name tag, hair tied back, and an 82-year-old Korean woman with natural silver hair in a low bun and an oatmeal cardigan over a sage floral blouse, sit close together at a low wooden table by a large bright window, sharing barley tea from small ceramic cups mid-conversation; the caregiver leans in listening warmly, the elder's hand rests on the table catching the light, faint steam rising. Compose the pair on the right third and leave soft, evenly-lit wall space on the left for a headline. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home interior: warm oak ondol flooring, low wood furniture, potted plants, framed family photos, a folded quilt, tidy and lived-in. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital ward, ICU, monitors, IV pole, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, holiday decorations, clutter. --ar 16:9 --style raw
```

---

## B · 방문요양 · 일상 지원  (4:3)

```
A 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and warm beige apron with a small name tag, hair tied back, gently supports an 82-year-old Korean woman with natural silver hair in a low bun and an oatmeal cardigan by the forearm as they walk slowly together along a sunlit apartment hallway toward the living room, both looking calmly at the next step; a wall handrail, morning light from an open doorway. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home interior: warm oak ondol flooring, low wood furniture, potted plants, framed family photos, a folded quilt, tidy and lived-in. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital ward, ICU, monitors, IV pole, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, holiday decorations, clutter. --ar 4:3 --style raw
```

---

## B · 방문요양 · 식사 준비  (3:2)

```
A 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and warm beige apron with a small name tag, hair tied back, prepares a simple Korean home meal in a small tidy kitchen — a bowl of rice, a pot of soup and three small side dishes on a wooden tray — while an 82-year-old Korean woman in an oatmeal cardigan over a sage floral blouse watches contentedly from a nearby chair; a wooden cutting board, a steaming kettle. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home kitchen: warm oak flooring, low wood furniture, potted plants, tidy and lived-in. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital ward, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, western food, holiday decorations, clutter. --ar 3:2 --style raw
```

---

## B · 방문목욕  (4:3)  — 손·얼굴·어깨선까지만, 존엄 우선

```
Close, respectful framing on hands and faces only: a 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and warm beige apron gently washes the hands and forearms of a seated 82-year-old Korean woman over a warm basin of water, then wraps the elder's shoulders in a soft dry towel; the elder is fully and modestly covered, shown from the shoulders up only, her face calm and relaxed; folded towels, a low stool, gentle steam. Tender and private, dignity fully preserved. Photorealistic editorial documentary photograph, full-frame 50mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home bathroom or bedroom corner, warm wood and cream tones. Dignified, tender, calm, unhurried, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave. Negative: nudity, bare torso, exposed body, bathtub with person inside, text, watermark, logo, harsh fluorescent light, cold blue or teal color cast, hospital, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, clutter. --ar 4:3 --style raw
```

---

## B · 방문간호 · 혈압 측정  (3:2)

```
A 40-year-old Korean visiting nurse in warm oat-colored scrubs measures the blood pressure of a 78-year-old Korean man with thin silver hair and glasses in a warm-brown knit vest, seated in his armchair at home; she watches the gauge with quiet focus while steadying his arm; her small canvas home-care bag open on the sofa, a small notebook beside her. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home living room: warm oak ondol flooring, low wood furniture, potted plants, framed family photos, tidy and lived-in. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital ward, ICU, monitors, IV pole, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, holiday decorations, clutter. --ar 3:2 --style raw
```

---

## B · 방문간호 · 투약 관리 디테일  (1:1)

```
A close-up of the hands of a 40-year-old Korean visiting nurse in warm oat-colored scrubs sorting a week of medication into a wooden pill organizer on a home table, beside a folded blood-pressure cuff and a handwritten care log; an elderly hand rests softly at the edge of the frame. Photorealistic editorial documentary photograph, full-frame 50mm lens at f/2.0, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Warm wooden table surface, contemporary South Korean home. Dignified, calm, unhurried, genuine human warmth, never clinical, never staged. Shallow depth of field, realistic skin texture and material detail, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital, clinical white walls, exaggerated smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, clutter. --ar 1:1 --style raw
```

---

## C · 센터 소개 · 대표 인사말 초상  (4:5)

```
A warm professional portrait of a 55-year-old Korean woman, director of a home-care center, seated at her desk, hands folded, a gentle closed-mouth smile, looking just off-camera; she wears a camel blazer over a cream knit. Softly lit modern office with a few plants and framed certificates blurred behind her. Approachable and trustworthy, not corporate. Photorealistic editorial portrait, full-frame 50mm lens at f/2.0, natural window light from the left, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Calm, dignified, sincere, genuine human warmth, never corporate, never staged. Realistic skin texture, shallow depth of field. Negative: text, watermark, logo, harsh fluorescent light, cold blue or teal color cast, clinical white background, hospital, exaggerated toothy smile, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted face, western corporate glass office. --ar 4:5 --style raw
```

---

## C · 상담 · 가족 상담 장면  (3:2)

```
A 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and a Korean woman in her late 40s (the elder's daughter) talk across a low living-room table holding a service brochure, a notebook and two cups of tea; the caregiver gestures gently while explaining, the daughter listens with cautious relief; an elderly parent sits softly out of focus in the background. Reassuring and honest. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home living room: warm oak ondol flooring, low wood furniture, potted plants, framed family photos, tidy and lived-in. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave, dust motes in the light. Negative: text, watermark, logo, signage, harsh fluorescent light, cold blue or teal color cast, hospital ward, clinical white walls, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, holiday decorations, clutter. --ar 3:2 --style raw
```

---

## D · 갤러리 · 생신 축하  (3:2)

```
A small modest birthday moment in a Korean home: an 82-year-old Korean woman with natural silver hair in a low bun and an oatmeal cardigan sits before a simple cream cake with a few lit candles, caught mid-laugh, as a 54-year-old Korean female caregiver in a dusty-rose polo and two family members lean in around her; a bowl of seaweed soup on the table, a hand caught mid-clap. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, natural window light from the left plus warm candlelight, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home interior: warm oak ondol flooring, low wood furniture, potted plants, framed family photos, tidy and lived-in. Dignified, tender, joyful but calm, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave. Negative: balloons, party hats, western birthday decor, text, watermark, logo, harsh fluorescent light, cold blue or teal color cast, hospital, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, clutter. --ar 3:2 --style raw
```

---

## D · 갤러리 · 나들이 동행  (3:2)  — 야외, 실내 컷과 같은 톤 유지

```
A 54-year-old Korean female caregiver in a soft dusty-rose polo shirt walks arm-in-arm with an 82-year-old Korean woman with natural silver hair and an oatmeal cardigan along a quiet tree-lined Korean residential street in autumn, both mid-stride and talking; fallen golden leaves, the elder holding a light wooden cane. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, outdoor golden-hour backlight, low warm sun, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Quiet Korean residential neighborhood, low brick walls and hedges, autumn foliage. Dignified, tender, calm, unhurried, quietly hopeful, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave. Negative: text, watermark, logo, harsh midday light, cold blue or teal color cast, wheelchair, hospital, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western suburb, palm trees, holiday decorations. --ar 3:2 --style raw
```

---

## D · 갤러리 · 요양보호사 교육  (3:2)

```
Four Korean female caregivers aged 40 to 60, all in soft dusty-rose polo shirts, sit around a table in a bright modest community meeting room during a training session; one takes notes, one practices a safe transfer technique on a floor cushion, an instructor points to a printed handout; focused and collegial. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.5, warm daylight from tall windows on the left, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Simple Korean community room, warm wood table, a few potted plants. Warm and focused, genuine, never corporate, never staged. Candid, realistic skin texture and fabric weave. Negative: legible text on slides or handouts, watermark, logo, harsh fluorescent light, cold blue or teal color cast, corporate glass office, hospital, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior. --ar 3:2 --style raw
```

---

## D · 갤러리 · 명절 위문 방문  (4:3)

```
A 54-year-old Korean female caregiver in a soft dusty-rose polo shirt and beige apron arrives at an elderly couple's apartment doorway during a traditional Korean holiday, holding a small gift box of fruit wrapped in cloth; an 82-year-old Korean woman in an oatmeal cardigan receives it warmly with both hands and a slight bow; warm hallway light, a doormat, house slippers by the step. Photorealistic editorial documentary photograph, full-frame 35mm lens at f/2.2, warm indoor light, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary Korean apartment entryway, warm wood and cream tones. Dignified, tender, calm, unhurried, genuine human warmth, never clinical, never staged. Candid, subjects not looking at the camera, shallow depth of field, realistic skin texture and fabric weave. Negative: Christmas, western holiday decor, text, watermark, logo, harsh fluorescent light, cold blue or teal color cast, hospital, exaggerated toothy smiles, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers, distorted faces, western-style interior, clutter. --ar 4:3 --style raw
```

---

## D · 갤러리 · 반찬 나눔  (1:1)

```
A close-up of two pairs of hands, a caregiver's and a volunteer's, packing home-made Korean side dishes into small round containers on a warm wooden kitchen counter; labeled lids, a neat stack ready to deliver, steam rising from a pot behind. Photorealistic editorial documentary photograph, full-frame 50mm lens at f/2.2, natural window light from the left through a sheer curtain, warm 3600K, soft, no harsh shadows. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary South Korean home kitchen, warm wood surfaces. Calm, purposeful, genuine human warmth, never staged. Shallow depth of field, realistic skin texture and material detail. Negative: text, watermark, logo, harsh fluorescent light, cold blue or teal color cast, plastic stock-photo look, oversaturation, HDR halos, deformed hands, extra fingers, western food, western kitchen, clutter. --ar 1:1 --style raw
```

---

## E · 신뢰 배너 · 손 클로즈업  (3:1)

```
An extreme close-up of a younger Korean hand gently cupping the weathered hand of an elderly Korean person, resting together on a warm quilt; visible skin texture and soft creases, a thin gold wedding band on the elder's finger, gentle directional sunlight and shadow, nothing else in the frame, calm empty quilt space on one side for text. Quiet, intimate, hopeful. Photorealistic editorial photograph, full-frame 85mm lens at f/2.5, natural window light from the left, warm 3600K, soft. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with deep warm-brown shadows, gentle film contrast, fine grain. Dignified, tender, genuine human warmth, never clinical, never staged. Realistic skin texture, shallow depth of field. Negative: text, watermark, logo, medical gloves, more than two hands, harsh light, cold blue or teal color cast, hospital, plastic stock-photo look, oversaturation, HDR halos, waxy skin, deformed hands, extra fingers. --ar 3:1 --style raw
```

---

## E · 섹션 배경 텍스처  (16:9)  — 아주 옅게 깔기, 글자 얹힘용

```
A softly out-of-focus corner of a warm Korean living room, a potted plant, a sheer curtain glowing with afternoon light, a hint of a wooden shelf, extreme shallow focus, almost abstract, large areas of soft empty space, no people. Photorealistic photograph, full-frame 50mm lens at f/1.8, natural window light from the left, warm 3600K. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents, gentle film contrast, fine grain. Calm and atmospheric. Negative: text, watermark, logo, people, faces, hands, sharp focus, busy detail, harsh light, cold blue or teal color cast, oversaturation, HDR halos, western-style interior, clutter. --ar 16:9 --style raw
```

---

## E · 오시는 길 · 상담실  (3:2)  — 사람 없음

```
An empty, welcoming consultation corner of a home-care center: a low round table with two soft chairs, a small potted plant, a warm woven rug, a shelf with folders and a tea set, afternoon sunlight falling across the wooden floor. Calm and tidy, no people. Photorealistic interior photograph, full-frame 24mm lens at f/4, natural window light from the left, warm 3600K, soft. Warm autumn-sunlight color grade: honey, terracotta, sand and cream with muted sage-green accents and deep warm-brown shadows, gentle film contrast, fine grain. Contemporary Korean interior, warm oak flooring, inviting and quiet. Negative: text, watermark, logo, signage, people, harsh fluorescent light, cold blue or teal color cast, hospital, clinical white, oversaturation, HDR halos, western corporate office, clutter. --ar 3:2 --style raw
```

---

## 일관성 체크리스트

- [ ] 16컷 모두 왼쪽 창 조명 · 동일한 color grade 문장 · 얕은 심도
- [ ] 요양보호사 더스티로즈 / 간호사 오트 / 어르신 오트밀+세이지 — 옷 색 일치
- [ ] 정면을 응시하는 인물 없음 (대표 초상만 예외, 그마저도 살짝 옆)
- [ ] 병원 · 형광등 · 차가운 파란 색조 없음
- [ ] 손·얼굴 왜곡 없음 (특히 손 클로즈업 · 디테일 · 반찬 나눔)
- [ ] 히어로 · 배너는 글자 올릴 여백 확보
- [ ] 생성 후 Lightroom 동일 프로파일/LUT 일괄 적용

## 초상권

실제 어르신·가족 사진 사용 금지. 전부 AI 생성 또는 model release 있는 소스만.
생성 결과가 특정 실존 인물과 닮지 않도록 확인. 방문목욕은 손·얼굴·어깨선까지만.
