// https://www.obut.com/en/glossary-of-petanque-terms

export function trans(word: string): string {
	return TRANS[word] || word
}

const TRANS = {
	"team": "equipe",
	"battle": "ARRIVER A BATAILLE",
	"preparation": "préparation",
	"play": "jouer",
	"ranking": "classement",
	"wins": "Victoires",
	"players": "joueuses / joueurs",
	"name": "nom",
	"result": "résultat",
	"result_prov": "résultat (prov)",
	"evaluate_games": "évaluer les jeux",
	"add": "ajoutez!",
	"points_won": "Points marqués"
}
// NOTES:
// * Slang, idiomatic, colloquial or regional term/expression (generally originating from the area between Marseille and La Ciotat). 
// # Specific jargon or technical term used in pétanque in France. 
// 
// 
// AGANTER*: 
// To catch, hit, get, clear. This refers to hitting the opponent’s boule. Used in the imperative, "Go on Bert, agante it!", as an encouragement to your pointer. If you inadvertently “agantez” one of your own boules, it's called “killing the dog”.
// 
//  
// 
// AJOUTER (TO ADD): 
// To take one or more additional points.
// 
//  
// 
// ARRIVER A BATAILLE # (LITERALLY “TO GET TO BATTLE”): 
// When both teams have between 10 and 11 points, either side may lose or win the game during every lead. This gives the game a special intensity and attracts considerably more spectators, giving players emotions that are discouraged by cardiologists!
// 
//  
// 
// ADVANTAGE (TO HAVE THE): 
// To have more boules left to play than your opponent; or, if you have an equal number of boules, to “have” or “hold” (i.e. to be winning) the point.
// 
//  
// 
// BATI-BATI# (LITERALLY “FRAME-FRAME”): 
// To “have bati-bati” means to lose your cool at a decisive stage of the game, for example, when the score is at 12/12.
// 
//  
// 
// BEC# (LITERALLY ”PECK”): 
// To change the course of a pointed boule so that it just touches another boule on the side: it is said to “give a little peck on the cheek” of the other boule.
// 
//  
// 
// BIBERON# (“TO MAKE A BIBERON” = LITERALLY “TO PREPARE A BABY’S BOTTLE”): 
// To place a boule adjoining the jack.
// 
//  
// 
// BOMBARD: 
// To shoot or strike your opponent’s boules one after the other, after the opponent has taken the lead.
// 
//  
// 
// BOUCHE (MOUTH): 
// A “bouche” is a loudmouth braggart, who speaks more than he acts. To “shoot in the mouth” means to do a direct hit stun shot.
// 
//  
// 
// BRAQUER (TO STARE): 
// To stare at your opponent to distract him while he is shooting.
// 
//  
// 
// BRAS (ARM): 
// The part of the body of champions most coveted by other players, who say things like "If I had an arm like him...". These champions are called “gros bras” (“strong arms”), or Golden Arms.
// 
//  
// 
// BUT (LITERALLY “GOAL”, I.E., THE JACK): 
// Also called the bouchon, cochonnet, petit, gari or kiki, it is a small wooden ball 35 mm in diameter.
// 
//  
// 
// BUT NOYÉ# (LITERALLY “DROWNED” JACK): 
// A jack that is unplayable because it cannot be seen from the playing circle.
// 
// 
// CABANON (LITERALLY “CABIN”): 
// In southern France, many family pétanque games took place on Sunday at their cabanon (weekend  cabin). When these players occasionally took part in a contest, they were referred to as "cabin players".
// 
//  
// 
// CADRE (FRAME): 
// Laid-out pitch, especially in championships (official dimensions: 4 m wide, 15 m long).
// 
//  
// 
// CARAMBOLAGE (PILE-UP): 
// A powerful shot that knocks away several boules at once.
// 
//  
// 
// CARREAU# (LITERALLY “TILE”, MEANING A DIRECT STUN SHOT): 
// The shooter's boule takes the place of the boule it has just hit (also known as fly, egg, freezing, buffet stop, or patch).
// 
//  
// 
// CASSER LE BRAS# (BREAK THE ARM): 
// To distract a shooter, with a movement or a noise nuisance just when he is shooting.
// 
//  
// 
// CASQUETTE# (LITERALLY “CAP”): 
// An unfortunate strike shot in which the shooter’s boule just brushes the top of the targeted boule and 'caps' it for a split second but fails to knock it away.
// 
//  
// 
// CIRCLE (OR “ROND”/RING): 
// Circle from within which boules are thrown.
// 
//  
// 
// CHIQUER# (LITERALLY “TO CHEW”): 
// To lightly touch a boule on the side.
// 
//  
// 
// CONTRE (LITERALLY “COUNTER”): 
// May be beneficial or not. A boule that is struck by a shooter lands on another boule (of his own team or the opponent’s team) or onto the jack.
// 
//  
// 
// CROCHET# (HOOK): 
// A shot played badly due to incorrect opening of the hand. May be the result of excess pressure, fatigue, or cold. Also known as ganchou or carpe (carp), brochet (pike) or écart (gap).
// 
//  
// 
// DEMARQUER# (LITERALLY “TO UN-SCORE”): 
// Taking a point away from your own team when either pointing or shooting.
// 
//  
// 
// DEMI-PORTEE (HALF-RANGE): 
// To point by throwing your boule to about midway between the circle and the jack.
// 
//  
// 
// DEVANT DE BOULE: 
// To “make a devant de boule” means to place your boule in front of your opponent’s, taking the lead and making it difficult for your opponent to shoot.
// 
//  
// 
// DONNEE#: 
// When pointing, the precise location where you want your boule to land on the ground before rolling.
// 
//  
// 
// EMBOUCHONNER#: 
// To “prepare a baby’s bottle” (biberon).
// 
//  
// 
// ENVOYER (SEND): 
// To bring a boule to near the jack.
// 
//  
// 
// ESCAGASSER*#: 
// In southern France, to trounce your opponent.
// 
//  
// 
// ESTANQUE*#: 
// Comes from the word pétanque: a strike that remains in place; a palet (puck) or carreau.
// 
//  
// 
// FAIRE LA PIECE (TO TOSS THE COIN): 
// To toss a coin to see who will start the game.
// 
//  
// 
// FAIRE LES MAINS (LITERALLY “TO MAKE HANDS”): 
// To play alone with 6 boules against a team of two or three players.
// 
//  
// 
// FANNY: 
// According to tradition, when players lose 13-0 then, as a humiliation, they must kiss the buttocks of a woman (or sometimes a donkey) called Fanny (usually a cardboard cut-out, etc.).
// 
//  
// 
// FUSER (SHOOT AWAY): 
// When a boule that hits the ground incorrectly and suddenly shoots away off course.
// 
//  
// 
// GALLERY: 
// All the spectators watching a game.
// 
//  
// 
// GRATTON*: 
// A mythical small stone which, together with a pine nut and a “bad hit”, are (supposedly) the causes of all badly-played shots.
// 
//  
// 
// JOUER NATURE#: 
// To “play nature” means to play naturally, i.e.,  to point without using any effect.
// 
//  
// 
// JOUER SOUS MAIN (TO PLAY UNDERHAND): 
// To play your boule with your palm facing the ground.
// 
//  
// 
// JOUER SUR MAIN (TO PLAY OVERHAND): 
// To play your boule with your palm facing the sky.
// 
//  
// 
// MELEE#: 
// A draw for forming teams.
// 
//  
// 
// MENE# (END): 
// A phase of a game of bowls that ends when both teams have played all their bowls or when the jack is lost (or knocked outside the pitch).
// 
//  
// 
// MENER LE BOUCHON# (TO LEAD THE JACK): 
// To play as pointer and therefore to throw the jack.
// 
//  
// 
// MORDRE# (TO BITE): 
// To put your foot or feet outside the ring of the circle.
// 
//  
// 
// PALET (PUCK): 
// To “do a palet” means to shoot just in front of a boule and knock it away while remaining within 50 cm of the jack.
// 
//  
// 
// PORTEE (SPAN OR RANGE): 
// To “do a portée” means to lob a boule high so that it falls almost vertically near the jack or a boule.
// 
//  
// 
// POUSSETTE# (LITERALLY “LITTLE  PUSH” OR “PUSH SHOT”): 
// To push one or more of your team’s boules toward the jack or to push the jack.
// 
//  
// 
// RAMI*#: 
// To play a great shot with a little luck.
// 
//  
// 
// RASPAILLETTE#: 
// A rolled shot that is regarded with contempt by experts. The shooter’s boule falls 2 or 3 metres from the targeted boule and drives it away while rolling.
// 
//  
// 
// REFENTE# (SPLIT): 
// To “split” or open up the game by knocking into a group of boules and hoping to end up close to the jack.
// 
//  
// 
// ROULETTE#: 
// Near the circle, the boule is rolled sharply to the jack.
// 
//  
// 
// SAUTER (JUMP): 
// To “jump” a boule means to miss a strike shot at a boule and then fall just behind it.
// 
//  
// 
// TROU (HOLE): 
// To make a hole means to miss a strike shot. The boule hits the ground instead of its target, and leaves a mark (a hole).
// 
//  
// 
// TIR A LA SAUTEE# (JUMPING STRIKE): 
// To shoot or strike a boule that is hidden behind another one.
// 
//  
// 
// TIRER AU FER#: 
// To “shoot the iron”: to knock away a boule without touching the ground.
// 
//  
// 
// TIRER A LA RAFLE# (DO A GROUND SHOT): 
// To shoot with power, virtually at ground level.