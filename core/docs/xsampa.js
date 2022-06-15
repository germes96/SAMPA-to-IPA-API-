/**
 * @swagger
 * /xsampa/v1/ipatosampa/:
 *  get:
 *      description: convert IPA to SAMPA
 *      tags:
 *          - XSAMPA
 *      parameters: 
 *          - name: text
 *            in: query
 *            description: your text in IPA
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */

/**
 * @swagger
 * /xsampa/v1/sampatoipa/:
 *  get:
 *      description: convert SAMPA to IPA
 *      tags:
 *          - XSAMPA
 *      parameters: 
 *          - name: text
 *            in: query
 *            description: your text in SAMPA
 *            required: true
 *      responses:
 *          '200':
 *              description: A successful response
 */