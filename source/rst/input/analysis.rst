========
Analysis
========
``stiffness_calculation_method``
    * Type: String
    * Description: The stiffness calculation method. Possible options include ``conventional`` and ``effective``. However, we no longer use ``conventional`` in the recent projects since its performance is concerning, and this parameter is going to be deprecated (the value of it will be set as ``effective`` permanently) for the same reason.

``use_progressive_meshing``
    * Type: Boolean
    * Description: Whether to utilize progressive meshing technique. Since it will be more efficient with the utilization of progressive meshing, this parameter will be set as 1 (enabled) permanently and be deprecated in the future.


Nonlinear Analysis
==================

(Confirmation Needed) for all the section.

``include_nonlinear_analysis``
    * Type: Yes or No
    * Description: Whether to consider nonlinearity in the simulation.

``geostatic_loading_time_sec``
    * Type:
    * Description:

``geostatic_cushion_time_sec``
    * Type:
    * Description:

``approximate_geostatic_state``
    * Type: Yes or No
    * Description: Whether an initial stress state with :math:`K_o = 1 - \sin\phi` as coefficient of lateral earth pressure at rest should be assumed.

``material_plasticity_type`` (Confirmation Needed)
    * Type: String
    * Description: Possible options include ``rate_independant`` and ``rate_independant``. ("independant" seems like a typo.)

``material_model``
    * Type: String
    * Description: Possible options include linear, ``vonMises_EP``, ``vonMises_FAO``, ``vonMises_FAM``, ``vonMises_BAH``, ``vonMises_BAE``, ``vonMises_BOH``, ``vonMises_BOE``, ``vonMises_GQH``, ``vonMises_MKZ``, ``vonMises_RO``, ``DruckerPrager``, and ``MohrCoulomb``.

.. Notes: vonMises_FAO and  vonMises_FAM  use kinematic hardening modulus to simulate clays in undrained conditions (very rapid phenomena).
       vonMises_FAO: Original Frederich-Armstrong formulation. Gamma0 is obtained from the modulus reductions curves. Gamma0 defines the maximum linear elastic shear stress “So=G*Gamma0”.
                     psi= Hkin/mu is the ratio between the kinematic hardening modulus and mu.
       vonMises_FAM: Modified Frederich-Armstrong formulation. No elastic region is considered, thus Gamma=0. The modification generates closed hysteric loops under symmetric loading.
       vonMises_EP : Elastoplastic. Gamma0 and psi are set to zero. This model generates elasto-plastic behavior with Tao_max=2Su/sqrt(3).
       vonMises_BAH: Borja and Amies (1994) model for hyperbolic hardening function.  H=psi*mu*(kappa)^m. “psi” and “m” are calibrated from the target G/Gmax curve. “kappa” is a plastic variable
       vonMises_BAE: Borja and Amies (1994) model for exponential hardening function. H= 3mu * kappa^2 / (1+2*kappa). No calibration is needed.
       vonMises_GQH: Groholski et al (2016) Hardening function derivated from ecs. (10) and (13)
       vonMises_MKZ: Matasovic(1994) Hardening function corresponding to the following backbone function: tau_bar=gamma_bar/(1+beta*gamma_bar^s)
       vonMises_RO : Ramberg Osgood. Hardening function corresponding to the following backbone function: gamma=tau/Gmax + alpha * tau^eta/(Gmax*tau_y^(eta-1)).
                     Where phi_RO = tau_y/tao_Max, and tao_Max=2Su/sqrt(3). Variable alpha depends on the offset strain, i.e., alpha = gamma_off*Gmax/tao_Max


``error_tolerance``
    * Type: Float
    * Description:

``backbone_errTol``
    * Type: Float
    * Description:

``stiff_damp``
    * Type: Float
    * Description:

``freq_stiff_damp``
    * Type:
    * Description:

``tension_cutoff``
    * Type: Yes or No
    * Description: Whether to remove tensile stresses or not. This parameter only affects Mohr-Coulomb and Drucker-Prager material models.

``material_properties_count``
    * Type: Integer
    * Description:

``no_substeps``
    * Type: Integer
    * Description:

``material_properties_list``
    * Type: Multiple numbers
    * Format: 
    * Description:

