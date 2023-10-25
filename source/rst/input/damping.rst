=======
Damping
=======

.. TODO: Adding a description of different types of damping and their related calculations.

``type_of_damping``
    * Type: String
    * Description: The type of damping Hercules should use. Possible options include ``rayleigh``, ``mass``, ``none``, ``bkt``, ``bkt2``, ``bkt3``, and ``bkt3f``.

``simulation_velocity_profile_freq_hz``
    * Optional: Yes
    * Type: Float
    * Description: This parameter is only effective when ``type_of_damping`` is set to ``bkt``, ``bkt2``, ``bkt3``, or ``bkt3f``. It can be a floating number from ``0.0`` to ``simulation_wave_max_freq_hz``. This is an optional parameter and the default value is ``0.0``.

``use_parametric_q_factor``
    * Optional: Conditional
    * Type: Yes or No
    * Description: This parameter is required if ``type_of_damping`` is set to ``bkt``, ``bkt2``, ``bkt3``, or ``bkt3f``.

.. (Confirmation Needed) If this parameter is set to ``no`` and ``type_of_damping = bkt2``, it's equivalent to ``type_of_damping = none``.

``use_infinite_qk``
    * Optional: Conditional
    * Type: Yes or No
    * Description: This parameter is required if ``type_of_damping`` is set to ``bkt``, ``bkt2``, ``bkt3``, or ``bkt3f``.

``parametric_q_factor_constant``
    * Optional: Conditional
    * Type: Float
    * Description: This parameter is required if ``use_parametric_q_factor`` is set to ``yes``.

``parametric_q_factor_alpha``
    * Optional: Conditional
    * Type: Float
    * Description: This parameter is required if ``use_parametric_q_factor`` is set to ``yes``.

``parametric_q_factor_beta``
    * Optional: Conditional
    * Type: Float
    * Description: This parameter is required if ``use_parametric_q_factor`` is set to ``yes``.

``the_threshold_damping``
    * Type: Float
    * Description: The threshold to limit the :math:`\zeta` damping ratio. If the computed :math:`\zeta` is larger than this threshold, it will be set to this threshold.

``do_damping_statistics``
    * Optional: Yes
    * Type: Boolean
    * Description: Whether Hercules should print damping statistics to the standard output (usually the command line window running Hercules). This is an optional parameter and the default value is False (``do_damping_statistics = 0``).

